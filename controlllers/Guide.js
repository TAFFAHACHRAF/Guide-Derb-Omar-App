import Guide from '../models/Guide.js'
 
export const getGuides = async (req,res)=>{
    try{
        const guides = await Guide.find();
        res.status(200).json(guides);
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

export const getGuideById = async (req,res)=>{
    try{
        const guide = await Guide.findById(req.params.guideId)
        res.json(guide);
    }catch(err){
        console.log(res.body)
    }
}

export const createGuide = async (req,res) => {
    const guide=req.body
    const newGuide = new Guide(guide)
    try{
        const saved=await newGuide.save()
        res.send(saved)
    }catch(err){
        console.log("error")
        res.status(409).json({message : err.message})
    }
}

export const deleteGuide = async (req,res) => {
    try{
        const removedGuide = await Guide.deleteOne({ _id : req.params.guideId})
        res.json(removedGuide);
    } catch (err){
        res.json({message : err})
    }
}

export const updateGuide = async (req,res) => {
    try{
        const updateGuide = await Guide.updateOne(
            { 
                _id : req.params.guideId
            },
            { 
                $set : { 
                    first_name : req.body.family_name,
                    family_name : req.body.family_name,
                    nationality : req.body.nationality,
                    speciality : req.body.speciality,
                    password : req.body.password,
                    Person : req.body.Person,
                    Administrator : req.body.Administrator
                }  
            }
        );
        res.json(updateGuide);
    } catch (err){
        res.json({message : err})
    }
}
