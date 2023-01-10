const express = require("express");
const app = express();
app.get("/",function(req,res)
{
    res.send("<h1>hello</h1>");
});
app.get("/contact",function(req,res)
{
    res.send("contact me at my gmail id");
});
app.get("/about", function(req,res){
    res.send("love for animals");
});
app.get("/hobbies", function(req,res){
    res.send("<ul><li>coffee</li><li>code</li><li>beer</li></ul>");
});
app.listen(3002, function()
{
    console.log("server started on port 3002");
});
