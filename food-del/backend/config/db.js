import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://sshivangini95:MhoD69MIJgdLCOkE@cluster0.02cfl.mongodb.net/food-del').then(()=>console.log("DB Connected"));
    
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.