import express from "express";

const port = 3000;
const app = express();

app.get("/", (req, res) =>{
    res.send('<h1 style ="color: blue; font-family: tahoma, sans-serif" > Hello world </h1>');

});

app.get("/about", (req, res) =>{
    res.send('<h1 style ="color: blue; font-family: tahoma, sans-serif" > Hello world </h1>');

});

app.listen(port, ()=> {
    console.log(`Server is running on port ${port} `);
})


