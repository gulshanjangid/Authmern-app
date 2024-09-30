const mongoose = require('mongoose'); 
 const mongo_url = process.env.MONGO_CONN;

 mongoose.connect(`mongodb://127.0.0.1:27017/authdb`)
 .then(()=>{
    console.log('MongoDb Connected...');
 }).catch((err) =>{
    console.log('mongoDb Connection Errror',err);
 })
