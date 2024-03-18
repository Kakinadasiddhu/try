// schema
import mongoose from "mongoose";
const Schema = mongoose.Schema;
let usersdata=new Schema({
    Email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

export default mongoose.model("userdt",usersdata);
// export default mongoose.model("collectionName",SchemaVariableName);