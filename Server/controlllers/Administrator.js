import Administrator from '../models/Administrator.js'
 
export const getAdministrators = async (req,res)=>{
    try{
        const administrators = await Administrator.find();
        res.status(200).json(administrators);
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

export const getAdministratorById = async (req,res)=>{
    try{
        const administrator = await Administrator.findById(req.params.administratorId)
        res.json(administrator);
    }catch(err){
        console.log(res.body)
    }
}

export const createAdministrator = async (req,res) => {
    const administrator=req.body
    const newAdministrator = new Administrator(administrator)
    try{
        const saved=await newAdministrator.save()
        res.send(saved)
    }catch(err){
        console.log("error")
        res.status(409).json({message : err.message})
    }
}

export const deleteAdministrator = async (req,res) => {
    try{
        const removedAdministrator = await Administrator.deleteOne({ _id : req.params.administratorId})
        res.json(removedAdministrator);
    } catch (err){
        res.json({message : err})
    }
}

export const updateAdministrator = async (req,res) => {
    try{
        const updateAdministrator = await Administrator.updateOne(
            { 
                _id : req.params.administratorId
            },
            { 
                $set : { 
                    name : req.body.name,
                    first_name : req.body.family_name,
                    family_name : req.body.family_name,
                    nationality : req.body.nationality,
                    password : req.body.password,
                    Person : req.body.Person
                }  
            }
        );
        res.json(updateAdministrator);
    } catch (err){
        res.json({message : err})
    }
}
