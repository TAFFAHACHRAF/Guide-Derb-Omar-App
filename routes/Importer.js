import express from "express";
import {getImporters,getImporterById,createImporter,deleteImporter,updateImporter} from "../controlllers/Importer.js";
const router = express.Router() 

router.get('/',getImporters)
router.get('/:importerId',getImporterById)
router.post('/', createImporter)
router.delete('/:importerId', deleteImporter)
router.patch('/:importerId',updateImporter)

export default router   