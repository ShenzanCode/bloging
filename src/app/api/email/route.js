import ConnectDb from "@/lib/configs/db";
import SubscriptionModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const LoadDb=async()=>{
    await ConnectDb();
}

LoadDb();
export async function POST(requirst) {
    const formData = await requirst.formData();
    const emailData={
        email:`${formData.get('email')}`,
    }
    await SubscriptionModel.create(emailData)
    return NextResponse.json({
        success: true,
        msg:"Email subscribed"
    })
}
//get emails

export async function GET(requirst) {
    const emails= await SubscriptionModel.find({});
    return NextResponse.json({
        success: true,
        emails
    })
}

//delete a subscription

export async function DELETE(requirst) {
    const emailId=await requirst.nextUrl.searchParams.get('id');
    await SubscriptionModel.findByIdAndDelete(emailId)
    return NextResponse.json({
        success: true,
        msg:"Email deleted"
    })
}