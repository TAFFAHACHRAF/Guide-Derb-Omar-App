import Training from '../models/Training.js'
 
export const getTrainings = async (req,res)=>{
    try{
        const trainings = await Training.find();
        res.status(200).json(trainings);
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

export const getTrainingById = async (req,res)=>{
    try{
        const training = await Training.findById(req.params.trainingId)
        res.json(training);
    }catch(err){
        console.log(res.body)
    }
}

export const createTraining = async (req,res) => {
    const training=req.body
    const newTraining = new Training(training)
    try{
        const saved=await newTraining.save()
        res.send(saved)
    }catch(err){
        console.log("error")
        res.status(409).json({message : err.message})
    }
}

export const deleteTraining = async (req,res) => {
    try{
        const removedTraining = await Training.deleteOne({ _id : req.params.trainingId})
        res.json(removedTraining);
    } catch (err){
        res.json({message : err})
    }
}

export const updateTraining = async (req,res) => {
    try{
        const updateTraining = await Training.updateOne(
            { 
                _id : req.params.trainingId
            },
            { 
                $set : { 
                    title: req.body.title,
                    description:req.body.description,
                    miniature:req.body.miniature,
                    video:req.body.video,
                    published:req.body.published,
                    modifyed:req.body.modifyed,
                    Administrator : req.body.Administrator
                }  
            }
        );
        res.json(updateTraining);
    } catch (err){
        res.json({message : err})
    }
}
