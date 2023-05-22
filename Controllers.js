import subject from "../models/subject.js";
import departement from "../models/departement.js";
                                                                                                                                                                 

export const index = async(req,res)=>{
    const subject = await subject.find({},name:1).lean();

    res.render('subjects/all',{subjects});

};
export const  create = (req,res)=>
{
    const departement = await  department.find().lean();
    res.render('SUbjects/create',{departements});
}
export const store = async(req, res)=>
{
    console.log(req.body);
    const name = req.body.name;
    const Code= req.body.CodE;
    const departement = req.body.departement;

    subject.create
    {
        name,
        Code,
        departement
    }
}