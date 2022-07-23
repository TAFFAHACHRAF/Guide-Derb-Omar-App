import Visitor from '../models/Visitor.js'
 
export const getVisitors = async (req,res)=>{
    try{
        const visitors = await Visitor.find();
        res.status(200).json(visitors);
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

export const getVisitorById = async (req,res)=>{
    try{
        const visitor = await Visitor.findById(req.params.visitorId)
        res.json(visitor);
    }catch(err){
        console.log(res.body)
    }
}

export const createVisitor = async (req,res) => {
    const visitor=req.body
    const newVisitor = new visitor(Visitor)
    try{
        const saved=await newVisitor.save()
        res.send(saved)
    }catch(err){
        console.log("error")
        res.status(409).json({message : err.message})
    }
}

export const deleteVisitor = async (req,res) => {
    try{
        const removedVisitor = await Visitor.deleteOne({ _id : req.params.visitorId})
        res.json(removedVisitor);
    } catch (err){
        res.json({message : err})
    }
}

export const updateVisitor = async (req,res) => {
    try{
        const updateVisitor = await Visitor.updateOne(
            { 
                _id : req.params.visitorId
            },
            { 
                $set : { 
                    first_name : req.body.first_name,
                    family_name : req.body.family_name,
                    nationality : req.body.nationality,
                    password : req.body.password,
                    Person : req.body.Person,
                    Administrator : req.body.Administrator
                }  
            }
        );
        res.json(updateVisitor);
    } catch (err){
        res.json({message : err})
    }
}
