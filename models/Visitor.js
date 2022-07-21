import  mongoose from "mongoose"
import pkg from 'mongoose';
const { Schema } = pkg;

const VisitorSchema = mongoose.Schema({
    first_name : {
        type : String,
        required : true
    },
    family_name : {
        type : String,
        required : true
    },
    nationality : {
        type : String,
        required : false
    },
    password : {
        type : String,
        required : true
    },
    Person : {
        type : Schema.Types.ObjectId,
        ref : 'Person'
    },
    Administrator : {
        type : Schema.Types.ObjectId,
        ref : 'Administrator'
    }
});
const Visitor = mongoose.model('Visitor',VisitorSchema);
export default Visitor
