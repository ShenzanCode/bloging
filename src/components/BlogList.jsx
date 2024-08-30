'use client'
import { blog_data } from '@/Assets/assets'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios'

const BlogList = () => {
    const [meno, setmano]=useState('All');
    const [Blogs,setBlogs] = useState([]);
    const fechBlogs = async()=>{
        const response = await axios.get('/api/blog');
        setBlogs(response.data.blogs)
        console.log(response.data.blogs);
    }

    useEffect(()=>{
        fechBlogs();
    },[])
  return (
    <div>
    <div className="flex justify-center gap-6 my-10">
        <button onClick={()=>setmano('All')} className={meno==='All'?'bg-black text-white py-1 px-4 rounded-sm':""}>All</button>
        <button onClick={()=>setmano('Technology')} className={meno==='Technology'?'bg-black text-white py-1 px-4 rounded-sm':""}>Technology</button>
        <button onClick={()=>setmano('Startup')} className={meno==='Startup'?'bg-black text-white py-1 px-4 rounded-sm':""}>Startup</button>
        <button onClick={()=>setmano('Lifestyle')} className={meno==='Lifestyle'?'bg-black text-white py-1 px-4 rounded-sm':""}>Lifestyle</button>
    </div>
    {Blogs.map((item, index)=>{
        item.title
    })}
    <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {Blogs.filter((item)=>meno==='All'?true:item.category===meno).map((item, index)=>{
            return <BlogItem key={index} id={item._id} image={item.image} description={item.description} title={item.title} category={item.category}/>
        })}
    </div>
</div>
  )
}

export default BlogList