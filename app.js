const express = require('express');
const mongoose = require('mongoose');
const app=express();
app.use(express.json())
const cors = require("cors");
const bodyParser = require("body-parser");
const { ReturnDocument } = require('mongodb');
const user = require('./sendmail')
app.use(bodyParser.json());
app.use(cors());
mongoose.connect('mongodb+srv://admin:Koushik123@cluster1.12wr9zu.mongodb.net/logins?retryWrites=true&w=majority&appName=Cluster1')
.then(() => app.listen(5000))
.then(() =>
console.log("Connected")
)
.catch((err) => console.log(err));




// -----------------------------login code---------------------------

app.post('/signin', async (req, res) => {
    const { Email, password } = req.body;
  // console.log(username)
    try {
      const userdata = await user.findOne({ Email, password });
  
      if (!userdata) {
        return res.status(404).json({ error: 'Invalid Email or password' });
      }
  
      return res.status(200).json({ userdata });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });





// -----------------------register page-------------------------


  app.post('/signup',(req,res,next)=>{
    console.log("test")
    console.log(req.body.formdata);
    const {Email,Username,Password}=req.body.formdata;
    let userdt;
    const udt =new user({
        Email,
        Username,
        Password
        
    })
    try{
      userdt = udt.save();
    }
    catch(err){
        console.log(err);
    }
    return res.send({msg:"inserted",result:userdt});
    })
    

    

