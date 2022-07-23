import TransporterConsultation from '../models/TransporterConsultation.js'
 
export const getTransporterConsultations = async (req,res)=>{
    try{
        const transporterConsultations = await TransporterConsultation.find();
        res.status(200).json(transporterConsultations);
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

export const getTransporterConsultationById = async (req,res)=>{
    try{
        const transporterConsultation = await TransporterConsultation.findById(req.params.transporterConsultationId)
        res.json(transporterConsultation);
    }catch(err){
        console.log(res.body)
    }
}

export const createTransporterConsultation = async (req,res) => {
    const transporterConsultation=req.body
    const newTransporterConsultation = new TransporterConsultation(transporterConsultation)
    try{
        const saved=await newTransporterConsultation.save()
        res.send(saved)
    }catch(err){
        console.log("error")
        res.status(409).json({message : err.message})
    }
}

export const deleteTransporterConsultation = async (req,res) => {
    try{
        const removedTransporterConsultation = await TransporterConsultation.deleteOne({ _id : req.params.transporterConsultationId})
        res.json(removedTransporterConsultation);
    } catch (err){
        res.json({message : err})
    }
}

export const updateTransporterConsultation = async (req,res) => {
    try{
        const updateTransporterConsultation = await TransporterConsultation.updateOne(
            { 
                _id : req.params.transporterConsultationId
            },
            { 
                $set : { 
                    date: req.body.date,
                    price:req.body.price,
                    description:req.body.description,
                    Transporter: req.body.Transporter,
                    seller: req.body.seller,
                    Administrator : req.body.Administrator,
                    Validation : req.body.Validation
                }  
            }
        );
        res.json(updateTransporterConsultation);
    } catch (err){
        res.json({message : err})
    }
}
