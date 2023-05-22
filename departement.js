import { schema, model } from  "mongoose";

const departement = new  schema({

    name:
    {
        type: String,
        required: true,
    },
    code:
    {
        type: String,
        required: false,
    },

},
{timestamps: true});

const departement=Model('departement',departement);

export default departementModel;

import { Router } from 'express';
import departement  from "../models/departement.js";
import subject from "../models/subject.js";


const Router = new Router();
Router.get("/",(req,res)=>
{
    res.render{"subjects/all"}

    
});

router.get("create_departements",async(req,res)=>
{
    avait departement.create({
        name:'Computer Science',
        code: 'CS',

    });
    avait departement.create({
        name:'Information System',
        code: 'IS',

    });
    avait departement.create({
        name:'Informaton Technology',
        code: 'IT',

    });

   res.send("Added")

});

export default router;   departemnt.js