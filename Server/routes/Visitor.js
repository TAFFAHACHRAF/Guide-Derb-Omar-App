import express from "express";
import {getVisitors,getVisitorById,createVisitor,deleteVisitor,updateVisitor} from "../controlllers/Visitor.js";
const router = express.Router() 

router.get('/',getVisitors)
router.get('/:visitorId',getVisitorById)
router.post('/', createVisitor)
router.delete('/:visitorId', deleteVisitor)
router.patch('/:visitorId',updateVisitor)

export default router   