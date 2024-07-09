import mongoose from "mongoose";
//import dotenv from "dotenv";

// dotenv.config({
//     path: "../.env"
// });
const db = 'mongodb+srv://faizanali4958:netbeans@cluster0.iypzbaf.mongodb.net/'
const databaseConnection = async () => {
    try {
        await mongoose.connect(db);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default databaseConnection;