import  mongoose from "mongoose"
import pkg from 'mongoose';
const { Schema } = pkg;

const GuideSchema = mongoose.Schema({
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
    speciality : {
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
const Guide = mongoose.model('Guide',GuideSchema);
export default Guide
