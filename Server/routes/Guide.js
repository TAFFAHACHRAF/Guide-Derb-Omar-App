import express from "express";
import {getGuides,getGuideById,createGuide,deleteGuide,updateGuide} from "../controlllers/Guide.js";
const router = express.Router() 

router.get('/',getGuides)
router.get('/:guideId',getGuideById)
router.post('/', createGuide)
router.delete('/:guideId', deleteGuide)
router.patch('/:guideId',updateGuide)

export default router   