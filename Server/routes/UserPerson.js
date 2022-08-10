import express from "express";
import {getUserPersons,getUserPersonById,signin,createUserPerson,deleteUserPerson,updateUserPerson} from "../controlllers/UserPerson.js";
const router = express.Router() 

router.get('/',getUserPersons)
router.get('/:UserPersonId',getUserPersonById)
router.post('/', createUserPerson)
router.post('/signin', signin)
router.delete('/:UserPersonId', deleteUserPerson)
router.patch('/:UserPersonId',updateUserPerson)

export default router   