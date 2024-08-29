import ConnectDb from "@/lib/configs/db";
import BlogModel from "@/lib/models/BlogModel";
import {writeFile} from "fs/promises"
import { NextResponse } from "next/server";
import { unlink } from "fs"
const loadDb=async()=>{
    await ConnectDb();
}
loadDb();

export async function GET(req) {
    const blogId= req.nextUrl.searchParams.get('id');
    if(blogId){
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json({
            blog
        })
    }
    const blogs= await BlogModel.find()
    return NextResponse.json({
        blogs
    })
}

export async function POST(req, res) {
    const formData= await req.formData();
    const timestamp = new Date().toISOString
    const image= formData.get('image');
    const imageByteData= await image.arrayBuffer();
    const buffer=Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl= `/${timestamp}_${image.name}`
    const blogData= {
        title:`${formData.get('title')}`,
        descripton:`${formData.get('descripton')}`,
        category:`${formData.get('category')}`,
        author:`${formData.get('author')}`,
        image:`${imgUrl}`,
        authorImage:`${formData.get('authorImage')}`,
    }

    await BlogModel.create(blogData)
    console.log(blogData)
    return NextResponse.json({
       success:true,
       msg:'Blog created successfully',
       blogData

    })

}

//api for delete particular blog

export async function DELETE(req) {
    const blogId= await req.nextUrl.searchParams.get('id');
    const blog= await BlogModel.findById(blogId);
    unlink(`./public${blog.image}`,()=>{})
    await BlogModel.findByIdAndDelete(blogId);
    return NextResponse.json({
        success:true,
        msg:'Blog deleted successfully'
    })
}