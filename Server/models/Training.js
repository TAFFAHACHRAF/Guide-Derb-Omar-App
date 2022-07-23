import  mongoose from "mongoose"
import pkg from 'mongoose';
const { Schema } = pkg;

const TrainingSchema = mongoose.Schema({
    title:{     
        type: String,
        required: true
    },
    description:{
        type : String,
        required : true
    },
    miniature:{
        type : String,
        required : false
    },
    video:{
        type : String,
        required: false
    },
    published:{
        type : Date,
        default: Date.now
    },
    modifyed:{
        type: Date,
        require: false
    },
    Administrator : {
        type : Schema.Types.ObjectId,
        ref : 'Administrator'
    }
});
const Training = mongoose.model('Training',TrainingSchema);
export default Training