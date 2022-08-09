import  mongoose from "mongoose"
import pkg from 'mongoose';
const { Schema } = pkg;

const VisitorSchema = mongoose.Schema({
    email : {
        type : String,
        required : false
    },
    password : {
        type : String,
        required : true
    }
});
const Visitor = mongoose.model('Visitor',VisitorSchema);
export default Visitor
