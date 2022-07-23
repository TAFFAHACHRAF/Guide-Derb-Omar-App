import Transporter from '../models/Transporter.js'
 
export const getTransporters = async (req,res)=>{
    try{
        const transporters = await Transporter.find();
        res.status(200).json(transporters);
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

export const getTransporterById = async (req,res)=>{
    try{
        const transporter = await Transporter.findById(req.params.transporterId)
        res.json(transporter);
    }catch(err){
        console.log(res.body)
    }
}

export const createTransporter = async (req,res) => {
    const transporter=req.body
    const newTransporter = new Transporter(transporter)
    try{
        const saved=await newTransporter.save()
        res.send(saved)
    }catch(err){
        console.log("error")
        res.status(409).json({message : err.message})
    }
}

export const deleteTransporter = async (req,res) => {
    try{
        const removedTransporter = await Transporter.deleteOne({ _id : req.params.transporterId})
        res.json(removedTransporter);
    } catch (err){
        res.json({message : err})
    }
}

export const updateTransporter = async (req,res) => {
    try{
        const updateTransporter = await Transporter.updateOne(
            { 
                _id : req.params.transporterId
            },
            { 
                $set : { 
                    social_reason:req.body.social_reason,
                    nationality : req.body.nationality,
                    speciality : req.body.speciality,
                    trade_register: req.body.trade_register,
                    company_logo:req.body.company_logo,
                    juridical_statute:req.body.juridical_statute,
                    password : req.body.password,
                    Person : req.body.Person,
                    Administrator : req.body.Administrator
                }  
            }
        );
        res.json(updateTransporter);
    } catch (err){
        res.json({message : err})
    }
}