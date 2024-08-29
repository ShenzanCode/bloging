import mongoose from "mongoose";
const ConnectDb= async () =>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB",error);
        process.exit(1);
    }
}

export default ConnectDb;