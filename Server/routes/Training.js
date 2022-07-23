import express from "express";
import {getTrainings,getTrainingById,createTraining,deleteTraining,updateTraining} from "../controlllers/Training.js";
const router = express.Router() 

router.get('/',getTrainings)
router.get('/:trainingId',getTrainingById)
router.post('/', createTraining)
router.delete('/:trainingId', deleteTraining)
router.patch('/:trainingId',updateTraining)

export default router   