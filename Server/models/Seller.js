import  mongoose from "mongoose"
import pkg from 'mongoose';
const { Schema } = pkg;

const SellerSchema = mongoose.Schema({
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
        ref : 'Person',
        required : true
    },
    Administrator : {
        type : Schema.Types.ObjectId,
        ref : 'Administrator'
    }
});
const Seller = mongoose.model('Seller',SellerSchema);
export default Seller
