import userPerson from "../models/UserPerson.js";
import jwt from "jsonwebtoken"
import { token } from 'morgan';


export const getUserPersons = async (req,res)=>{
    try{
        const UserPersons = await userPerson.find();
        res.status(200).json(UserPersons);
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

export const getUserPersonById = async (req,res)=>{
    try{
        const UserPerson = await userPerson.findById(req.params.UserPersonId)
        res.json(UserPerson);
    }catch(err){
        console.log(res.body)
    }
}

export const createUserPerson = async (req,res) => {
    const UserPerson=req.body
    const newUserPerson = new userPerson(UserPerson)
    try{
        const saved=await newUserPerson.save()
        res.send(saved)
    }catch(err){
        console.log("error")
        res.status(409).json({message : err.message})
    }
}

export const signin = async (req,res) => {
    const {email,password} = req.body

    userPerson.findOne({email}, (err, UserPerson) => {
        if(err || !UserPerson){
            return res.status(400).json({
                error : "Email was not found"
            })
        }

        // Authentificate
        if(!UserPerson.authentificate(password)){
            return res.status(400).json({
                error : "Email and password dot not match"
            })
        }

        // create token
        const accessToken = jwt.sign({_id: UserPerson._id}, 'eifuefh845612@')

        // put token in cookie
        res.cookie('token',token,{expire: new Date() + 1})

        //send response
        const {_id, name, email} = UserPerson
        return res.json({
            accessToken,
            UserPerson: {
                _id,
                name,
                email
            }
        })
    })
}

export const deleteUserPerson = async (req,res) => {
    try{
        const removedUserPerson = await userPerson.deleteOne({ _id : req.params.UserPersonId})
        res.json(removedUserPerson);
    } catch (err){
        res.json({message : err})
    }
}

export const updateUserPerson = async (req,res) => {
    try{
        const updateUserPerson = await userPerson.updateOne(
            { 
                _id : req.params.UserPersonId
            },
            { 
                $set : { 
                    postal_code:req.body.postal_code,
                    fax_number : req.body.fax_number,
                    phone_number : req.body.phone_number,
                    adresse: req.body.adresse,
                    age:req.body.age,
                    city:req.body.city,
                    birthay : req.body.birthay,
                    profie_image : req.body.profie_image,
                    date_created : req.body.date_created,
                    date_modifyed : req.body.date_modifyed,
                    verified : req.body.verified,
                    user_type : req.body.user_type,
                    email : req.body.email,
                    password : req.body.password                    
                }  
            }
        );
        res.json(updateUserPerson);
    } catch (err){
        res.json({message : err})
    }
}
