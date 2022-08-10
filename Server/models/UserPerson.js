import  mongoose from "mongoose"
import crypto from 'crypto'
import {v1 as uuidv1} from 'uuid';

const UserPersonSchema = mongoose.Schema({
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
    city:{
        type : String,
        required : false
    },
    birthay:{
        type : Date,
        required : false
    },
    profie_image:{
        type : String,
        required : false
    },
    date_created:{
        type : Date,
        default: Date.now,
        required : false
    },
    date_modifyed: {
        type : Date,
        required : false
    },
    verified:{
        type:String,
        required:false
    },
    user_type:{
        type:String,
        default: 'visitor'
    },
    email:{     
        type: String,
        required: true
    },
    encry_password : {
        type : String,
        trim : true,
        required : true
    },
    salt : String,
},{timestamps: true});


UserPersonSchema.virtual("password")
    .set(function(password) {
        this._password = password
        this.salt = uuidv1()
        this.encry_password = this.securePassword(password)
    })
    .get(function() {
        return this._password
})

UserPersonSchema.methods = {
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

const userPerson = mongoose.model('UserPerson',UserPersonSchema);
export default userPerson
