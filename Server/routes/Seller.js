import express from "express";
import {getSellers,getSellerById,createSeller,deleteSeller,updateSeller} from "../controlllers/Seller.js";
const router = express.Router() 

router.get('/',getSellers)
router.get('/:sellerId',getSellerById)
router.post('/', createSeller)
router.delete('/:sellerId', deleteSeller)
router.patch('/:sellerId',updateSeller)

export default router   