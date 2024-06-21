import mongoose from "mongoose";

 export const dbConnection=()=>{
  mongoose.connect(process.env.MONGO_URL,{
   dbName:"MERN_TCK_JON_SEEKING",
  }).then(()=>{
    console.log('connected to databse!')
  }).catch((err)=>{
    console.log(`some error occured whike connecting to database ${err}`);
  })
  };