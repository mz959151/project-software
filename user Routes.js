import {Router} from "express";

const router = new Router();

router.get("/user",(req,res)=>
{
    res.render("/users");
});
router.get("/user/create",(req,res)
{

});

router.get("/user/update",(req,res)
{

});

router.get("/user/delete",(req,res)
{

});
app.get("/user/:id",(req,res)
{

});

export default router;