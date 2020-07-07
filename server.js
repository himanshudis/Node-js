require('./model/db');
const employeecontroller=require('./employe/employeecontroller');
const express=require("express");
const bodyparser=require("body-parser");
const emailvalidator=require("email-validator");
const handlebars=require("express-handlebars");
const path=require("path");
var app=express();


app.get("/",(req,res)=>{
    res.send("hello");
});

app.use(bodyparser.urlencoded({
    extended:true
}));

app.use(bodyparser.json());

app.set('views',path.join(__dirname,'/views/'));

app.engine('hbs',handlebars({
    extname:'hbs',
    defaultLayout:'employee',
    layoutsDir:__dirname+'views/employees'
}));

app.set('view engine','hbs');

app.listen(8000,function(err){
    if(err){
        console.log(err)
    }
    else{
    console.log("success");
    }
})

app.use('/emplo',employeecontroller);
