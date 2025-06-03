import express from "express";

const port = 3000;
const app = express();



app.get("/", (req, res) => {
    res.send("<h1>Home page</h1>");
    console.log(req.rawHeaders);
    console.log(res.rawHeaders);
})


app.get("/about", (req, res) =>{
    res.send('<h1 style ="color: blue; font-family: tahoma, sans-serif" > About me</h1>');

});

app.get("/contact-me", (req, res) =>{
    res.send('<h1 style ="color: blue; font-family: tahoma, sans-serif" > Phone number is +264 81 64 86 416 </h1>');

});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})