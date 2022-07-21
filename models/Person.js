import  mongoose from "mongoose"

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
    adresse:{     
        type: String,
        required: false
    },
    city:{
        type : String,
        required : false
    },
    date_created:{
        type : Date.now,
        require : false
    },
    date_modifyed: {
        type : Date
    }
});
const Person = mongoose.model('Person',PersonSchema);
export default Person
