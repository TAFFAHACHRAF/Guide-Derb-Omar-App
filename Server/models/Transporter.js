import  mongoose from "mongoose"
import pkg from 'mongoose';
const { Schema } = pkg;
import crypto from 'crypto'
import {v1 as uuidv1} from 'uuid';

const TransporterSchema = mongoose.Schema({
    social_reason:{     
        type: String,
        required: false
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
    email : {
        type : String,
        required : true
    },
    encry_password : {
        type : String,
        trim : true,
        required : true
    },
    salt : String
    // Person : {
    //     type : Schema.Types.ObjectId,
    //     ref : 'Person'
    // },
    // Administrator : {
    //     type : Schema.Types.ObjectId,
    //     ref : 'Administrator'
    // }
},{timestamps: true});

TransporterSchema.virtual("password")
    .set(function(password) {
        this._password = password
        this.salt = uuidv1()
        this.encry_password = this.securePassword(password)
    })
    .get(function() {
        return this._password
})

TransporterSchema.methods = {
    authentificate : function(plainpassword){
        return this.securePassword(plainpassword) === this.encry_password
    },
    securePassword: function(plainpassword){
        if(!plainpassword) return ""

        try{
            return crypto.createHmac("sha256", this.salt).update(plainpassword).digest("hex")
        } catch(err){
            return ""
        }
    }
}

const Transporter = mongoose.model('Transporter',TransporterSchema);
export default Transporter
