import GuideConsultation from '../models/GuideConsultation.js'
 
export const getGuideConsultations = async (req,res)=>{
    try{
        const guideConsultations = await GuideConsultation.find();
        res.status(200).json(guideConsultations);
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

export const getGuideConsultationById = async (req,res)=>{
    try{
        const guideConsultation = await GuideConsultation.findById(req.params.guideConsultationId)
        res.json(guideConsultation);
    }catch(err){
        console.log(res.body)
    }
}

export const createGuideConsultation = async (req,res) => {
    const guideConsultation=req.body
    const newGuideConsultation = new GuideConsultation(guideConsultation)
    try{
        const saved=await newGuideConsultation.save()
        res.send(saved)
    }catch(err){
        console.log("error")
        res.status(409).json({message : err.message})
    }
}

export const deleteGuideConsultation = async (req,res) => {
    try{
        const removedGuideConsultation = await GuideConsultation.deleteOne({ _id : req.params.guideConsultationId})
        res.json(removedGuideConsultation);
    } catch (err){
        res.json({message : err})
    }
}

export const updateGuideConsultation = async (req,res) => {
    try{
        const updateGuideConsultation = await GuideConsultation.updateOne(
            { 
                _id : req.params.guideConsultationId
            },
            { 
                $set : { 
                    date: req.body.date,
                    price:req.body.price,
                    description:req.body.description,
                    Guide:req.body.Guide,
                    seller:req.body.seller,
                    Administrator : req.body.Administrator,
                    Validation : req.body.Validation
                }  
            }
        );
        res.json(updateGuideConsultation);
    } catch (err){
        res.json({message : err})
    }
}
