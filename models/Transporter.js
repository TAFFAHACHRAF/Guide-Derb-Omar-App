import  mongoose from "mongoose"

const TransporterSchema = mongoose.Schema({
    social_reason:{     
        type: String,
        required: true
    },
    nationality : {
        type : String,
        required : false
    },
    speciality : {
        type : String,
        required : false
    },
    trade_register:{
        type: String,
        required: false
    },
    company_logo:{
        type: String,
        required: false
    },
    juridical_statute:{
        type: String,
        required: false
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
const Transporter = mongoose.model('Transporter',TransporterSchema);
export default Transporter
