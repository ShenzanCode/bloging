import mongoose from "mongoose";
const Schema= new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now()
    }
})

const SubscriptionModel= mongoose.models.subscription || mongoose.model('subscription',Schema)

export default SubscriptionModel;