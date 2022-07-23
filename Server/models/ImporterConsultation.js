import  mongoose from "mongoose"
import pkg from 'mongoose';
const { Schema } = pkg;

const ImporterConsultationSchema = mongoose.Schema({
    date:{     
        type: Date,
        required: true
    },
    price:{
        type : String,
        required : false
    },
    description:{
        type : String,
        required : false
    },
    Importer:{
        type : Schema.Types.ObjectId,
        ref : 'Importer'
    },
    seller:{
        type : Schema.Types.ObjectId,
        ref : 'Seller'
    },
    Administrator : {
        type : Schema.Types.ObjectId,
        ref : 'Administrator'
    },
    Validation : {
        type : String,
        default : 'false'
    }
});
const ImporterConsultation = mongoose.model('ImporterConsultation',ImporterConsultationSchema);
export default ImporterConsultation
