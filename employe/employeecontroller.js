const express=require("express");
const mongoose=require('mongoose');
const database=mongoose.model('Himi')
const router=express.Router();

router.get('/',(req,res)=>{
    res.render('../views/employees/employee.hbs',{});
});
router.post('/',(req,res)=>{
    console.log("hello");
    // insertinto(req,res);
})
function insertinto(req,res){
    var k=new database();
    k.fullname=req.body.fullname;
    k.email=req.body.email;
    k.mobile=req.body.mobile;
    k.city=req.body.pwd;

    k.save(err=>{
        if(!err){
            console.log("posted");
        }
        else{
            console.log("err"+err);
        }
    })
};
module.exports=router;