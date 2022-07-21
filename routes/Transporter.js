import express from "express";
import {getTransporters,getTransporterById,createTransporter,deleteTransporter,updateTransporter} from "../controlllers/Transporter.js";
const router = express.Router() 

router.get('/',getTransporters)
router.get('/:transporterId',getTransporterById)
router.post('/', createTransporter)
router.delete('/:transporterId', deleteTransporter)
router.patch('/:transporterId',updateTransporter)

export default router   