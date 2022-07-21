import  mongoose from "mongoose"
import pkg from 'mongoose';
const { Schema } = pkg;

const PersonSchema = mongoose.Schema({
    postal_code:{
        type : String,
        required : false
    },
    fax_number:{
        type : String,
        required : false
    },
    phone_number:{
        type : String,
        required : false
    },
    adresse:{
        type : String,
        required : false
    },
    age:{
        type : Number,
        required : false
    },
    email:{     
        type: String,
        required: true
    },
    city:{
        type : String,
        required : false
    },
    date_created:{
        type : Date,
        default: Date.now
    },
    date_modifyed: {
        type : Date
    }
});
const Person = mongoose.model('Person',PersonSchema);
export default Person
