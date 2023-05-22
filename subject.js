import { Router } from 'express';
import departement  from "../models/departement.js";
import subject from "../models/subject.js";


const Router = new Router();
Router.get("/",(req,res)=>
{
    res.render{"subjects/index"}
   
    
});

router.get("create_subjects",async(req,res)=>
{
    avait subject.create({
        name:'Java',
        code: 'Java-CS',

    });
    avait subject.create({
        name:'System Analysis',
        code: 'Analysis-IS',

    });
    avaitsubject.create({
        name:'Networkng',
        code: 'Networking-IT',

    });

   res.send("Added")

});

export default router;  