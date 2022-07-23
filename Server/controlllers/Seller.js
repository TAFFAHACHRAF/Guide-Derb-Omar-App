import Seller from '../models/Seller.js'
 
export const getSellers = async (req,res)=>{
    try{
        const sellers = await Seller.find();
        res.status(200).json(sellers);
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

export const getSellerById = async (req,res)=>{
    try{
        const seller = await Seller.findById(req.params.sellerId)
        res.json(seller);
    }catch(err){
        console.log(res.body)
    }
}

export const createSeller = async (req,res) => {
    const seller=req.body
    const newSeller = new Seller(seller)
    try{
        const saved=await newSeller.save()
        res.send(saved)
    }catch(err){
        console.log("error")
        res.status(409).json({message : err.message})
    }
}

export const deleteSeller = async (req,res) => {
    try{
        const removedSeller = await Seller.deleteOne({ _id : req.params.sellerId})
        res.json(removedSeller);
    } catch (err){
        res.json({message : err})
    }
}

export const updateSeller = async (req,res) => {
    try{
        const updateSeller = await Seller.updateOne(
            { 
                _id : req.params.sellerId
            },
            { 
                $set : { 
                    social_reason:req.body.social_reason,
                    nationality : req.body.nationality,
                    speciality : req.body.speciality,
                    trade_register: req.body.trade_register,
                    company_logo: req.body.company_logo,
                    juridical_statute: req.body.juridical_statute,
                    password : req.body.password,
                    Person : req.body.Person,
                    Administrator : req.body.Administrator
                }  
            }
        );
        res.json(updateSeller);
    } catch (err){
        res.json({message : err})
    }
}
