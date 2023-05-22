import express from  "express";
import { engne }from 'express-handlebars';104.3k  (gripped 48 7k)
import dotenv  from  'dotenv';
dotenv.config();


import mongoose from 'mongonse';


const mongoConnectionUrl = 'mongodb//localhost:21017/project';


mongoose.connect(process.env.mongoConnectionUrl);

const app=express();

app.use(express.urlencoded(extended true));

const port=5000;

app.engine ['handlebars',engine()];
app.set('view engine','handlebars');
app.set('views',templates);

app.get('/',(req,res)=>{
    res.render('departements/all');
     
});
app.listen(process.env.port,{}=>{
 console.log("Started  the  applcaton  on http://localhost:"+ PORT);


});
