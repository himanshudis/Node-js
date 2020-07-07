const mongoose=require("mongoose");
const MongoClient = require('mongodb').MongoClient;
uri="mongodb+srv://himanshu:mbfasrdg786786@cluster0.4dvqd.mongodb.net/himi?retryWrites=true&w=majority";
// mongoose.connect(url,{useNewUrlParser:true},(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("successful connected to mongoose");
//     }
// })
const client = new MongoClient(uri, { useNewUrlParser: true ,useUnifiedTopology: true});
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
require('./employee.models'); 


/*

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://himanshu:<password>@cluster0.4dvqd.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});






*/