import { Router } from 'express';
import departement  from "../models/departement.js";
import subject from "../models/subject.js";


const Router = new Router();


router.get("/",(req,res)=>
{
    const subjects = await subject.find();
    console.log(subjects);
    res.render("subjects/all",{subjects});
});





