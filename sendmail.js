// schema
// import mongoose from "mongoose";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let mail=new Schema({
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'executive'
    }
    
});

// export default mongoose.model("send",mail);
// export default mongoose.model("collectionName",SchemaVariableName);
module.exports = mongoose.model("users",mail);