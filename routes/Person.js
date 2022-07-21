import express from "express";
import {getPersons,getPersonById,createPerson,deletePerson,updatePerson} from "../controlllers/Person.js";
const router = express.Router() 

router.get('/',getPersons)
router.get('/:personId',getPersonById)
router.post('/', createPerson)
router.delete('/:personId', deletePerson)
router.patch('/:personId',updatePerson)

export default router   