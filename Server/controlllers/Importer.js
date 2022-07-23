import Importer from '../models/Importer.js'
 
export const getImporters = async (req,res)=>{
    try{
        const importers = await Importer.find();
        res.status(200).json(importers);
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

export const getImporterById = async (req,res)=>{
    try{
        const importer = await Importer.findById(req.params.importerId)
        res.json(importer);
    }catch(err){
        console.log(res.body)
    }
}

export const createImporter = async (req,res) => {
    const importer=req.body
    const newImporter = new Importer(importer)
    try{
        const saved=await newImporter.save()
        res.send(saved)
    }catch(err){
        console.log("error")
        res.status(409).json({message : err.message})
    }
}

export const deleteImporter = async (req,res) => {
    try{
        const removedImporter = await Importer.deleteOne({ _id : req.params.importerId})
        res.json(removedImporter);
    } catch (err){
        res.json({message : err})
    }
}

export const updateImporter = async (req,res) => {
    try{
        const updateImporter = await Importer.updateOne(
            { 
                _id : req.params.importerId
            },
            { 
                $set : { 
                    social_reason: req.body.social_reason,
                    nationality : req.body.nationality,
                    speciality : req.body.speciality,
                    trade_register: req.body.trade_register,
                    company_logo: req.body.company_logo,
                    juridical_statute: req.body.juridical_statute,
                    password : req.body.password,
                    Person : req.body.Person,
                    Administrator : req.body.Administrator
                }  
            }
        );
        res.json(updateImporter);
    } catch (err){
        res.json({message : err})
    }
}
