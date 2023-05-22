import express from  "express";
import {engine } from  "express-handlebars";
import x  from "../software project/UserArray";
import studentRoutes  from  "../Android/studentRoutes.js";

import { students,name } from "../server.js/UserArray.js";

import userRoutes from "../software project/userRoutes.js";
import mongoose  from  "mongoose";

mongoose.connect("mongodb://localhost:27017//students");

const app = express();


app.engine('handlebars',engine());
app.set('view engine','handlebars');
app.set('views',"./templates");

app.use("/student",studentRoutes); 
app.use("/student",userRoutes); 

app.get("/students",(req,res)=>
{
   res.render('students',(name: "Ahmed"), students: x);
});

const students =
{
    (
        id:1,
        name="Ahmed",
        city="shiben",
    ),
    (
        id:2,
        name:"yasser",
        city:"Tanta",
    ),

    (
        id:3,
        name:"Andera",
        city:"Alexandria",
    )

}

const studentsFunction = (request,response)=>
{
    response.send('student',{layout: false, students});

    int output = <'ul'>;

    for(int i=0;i<students.lenght;i++)

    {

        const student = student(i);
    

    output+=<li><a href='/student/'" +student.id+ >" '+student.name +"</a></li>;
    }
    output+=<"/ul">;


    response.send(output);

}; 


app.get('./students',studentsFunction);






app.get("/student",(req,res)=>
{
    app.get("/student/create",(req,res)=>
{

});
app.get("/student/update",(req,res)=>
{

});
app.get("/student/delete",(req,res)=>
{
});
app.get("/student/:id",(req,res)=>
{

});


app.get("/users",(req,res)=>
{
    res.render("users");
});
})
app.listen(5000);
