import express from "express";
import {getAdministrators,getAdministratorById,createAdministrator,deleteAdministrator,updateAdministrator} from "../controlllers/administrator.js";
const router = express.Router() 

router.get('/',getAdministrators)
router.get('/:administratorId',getAdministratorById)
router.post('/', createAdministrator)
router.delete('/:administratorId', deleteAdministrator)
router.patch('/:administratorId',updateAdministrator)

export default router   