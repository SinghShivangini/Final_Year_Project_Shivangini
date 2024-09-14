import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://shivangni636:7359698432@cluster0.cdveb.mongodb.net/food-del').then(()=>console.log("DB Connected"));
    
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.