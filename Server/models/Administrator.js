import  mongoose from "mongoose"
import pkg from 'mongoose';
const { Schema } = pkg;

const AdministratorSchema = mongoose.Schema({
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
    password : {
        type : String,
        required : true
    },
    Person : {
        type : Schema.Types.ObjectId,
        ref : 'Person'
    }
});
const Administrator = mongoose.model('Administrateur',AdministratorSchema);
export default Administrator
