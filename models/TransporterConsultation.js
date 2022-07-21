import  mongoose from "mongoose"
import pkg from 'mongoose';
const { Schema } = pkg;

const TransporterConsultationSchema = mongoose.Schema({
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
    Transporter:{
        type : Schema.Types.ObjectId,
        ref : 'Transporter'
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
const TransporterConsultation = mongoose.model('TransporterConsultation',TransporterConsultationSchema);
export default TransporterConsultation
