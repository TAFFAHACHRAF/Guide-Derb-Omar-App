import Person from '../models/Person.js'
 
export const getPersons = async (req,res)=>{
    try{
        const persons = await Person.find();
        res.status(200).json(persons);
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

export const getPersonById = async (req,res)=>{
    try{
        const person = await Person.findById(req.params.personId)
        res.json(person);
    }catch(err){
        console.log(res.body)
    }
}

export const createPerson = async (req,res) => {
    const person=req.body
    const newPerson = new Person(person)
    try{
        const saved=await newPerson.save()
        res.send(saved)
    }catch(err){
        console.log("error")
        res.status(409).json({message : err.message})
    }
}

export const deletePerson = async (req,res) => {
    try{
        const removedPerson = await Person.deleteOne({ _id : req.params.personId})
        res.json(removedPerson);
    } catch (err){
        res.json({message : err})
    }
}

export const updatePerson = async (req,res) => {
    try{
        const updatePerson = await Person.updateOne(
            { 
                _id : req.params.personId
            },
            { 
                $set : { 
                    postal_code:req.body.postal_code,
                    fax_number:req.body.fax_number,
                    phone_number:req.body.phone_number,
                    adresse:req.body.adresse,
                    age:req.body.age,
                    email:req.body.email,
                    city:req.body.city,
                    date_created:req.body.date_created,
                    date_modifyed:req.body.date_modifyed
                }  
            }
        );
        res.json(updatePerson);
    } catch (err){
        res.json({message : err})
    }
}
