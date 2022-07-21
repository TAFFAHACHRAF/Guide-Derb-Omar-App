import  mongoose, { Schema } from "mongoose"

const GuideConsultationSchema = mongoose.Schema({
    date:{     
        type: Date,
        required: true
    },
    price:{
        type : Double,
        required : false
    },
    description:{
        type : String,
        required : false
    },
    Guide:{
        type : Schema.Types.ObjectId,
        ref : 'Guide'
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
const GuideConsultation = mongoose.model('GuideConsultation',GuideConsultationSchema);
export default GuideConsultation
