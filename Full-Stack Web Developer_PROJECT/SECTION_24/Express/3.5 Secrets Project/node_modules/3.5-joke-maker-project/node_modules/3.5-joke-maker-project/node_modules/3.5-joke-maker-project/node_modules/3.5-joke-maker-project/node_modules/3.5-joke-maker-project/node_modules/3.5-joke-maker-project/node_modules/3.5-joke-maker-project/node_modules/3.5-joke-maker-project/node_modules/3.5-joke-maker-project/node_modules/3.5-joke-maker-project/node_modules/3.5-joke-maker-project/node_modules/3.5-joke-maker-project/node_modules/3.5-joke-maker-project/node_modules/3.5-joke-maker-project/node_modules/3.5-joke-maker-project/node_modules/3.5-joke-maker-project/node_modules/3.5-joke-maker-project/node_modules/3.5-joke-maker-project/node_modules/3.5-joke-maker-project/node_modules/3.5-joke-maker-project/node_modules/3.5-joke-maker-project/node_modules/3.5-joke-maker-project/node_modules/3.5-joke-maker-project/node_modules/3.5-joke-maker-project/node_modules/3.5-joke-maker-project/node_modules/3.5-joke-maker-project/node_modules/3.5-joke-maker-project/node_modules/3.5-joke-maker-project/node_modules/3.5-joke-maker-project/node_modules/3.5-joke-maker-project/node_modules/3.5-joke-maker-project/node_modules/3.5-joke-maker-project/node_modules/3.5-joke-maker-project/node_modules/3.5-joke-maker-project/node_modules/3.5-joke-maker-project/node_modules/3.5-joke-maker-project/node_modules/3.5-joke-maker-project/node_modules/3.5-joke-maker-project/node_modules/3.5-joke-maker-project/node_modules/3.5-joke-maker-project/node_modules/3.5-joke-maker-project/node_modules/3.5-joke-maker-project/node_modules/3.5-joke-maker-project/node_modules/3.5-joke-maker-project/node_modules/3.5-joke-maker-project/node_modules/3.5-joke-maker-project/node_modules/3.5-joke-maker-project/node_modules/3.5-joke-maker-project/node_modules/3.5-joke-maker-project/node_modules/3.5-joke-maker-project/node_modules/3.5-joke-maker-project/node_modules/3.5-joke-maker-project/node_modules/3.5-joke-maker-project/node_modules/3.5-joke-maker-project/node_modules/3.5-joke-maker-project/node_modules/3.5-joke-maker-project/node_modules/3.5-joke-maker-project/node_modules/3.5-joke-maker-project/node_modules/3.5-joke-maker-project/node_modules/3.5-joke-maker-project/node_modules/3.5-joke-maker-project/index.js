//To see how the final website should work, run "node solution.js".
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


const app = express();
const port = 3001;
const __dirname = dirname(fileURLToPath(import.meta.url));
var password = "ILoveProgramming";
var enteredPassword = "";
var userIsAuthorised = false;

//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

app.use(bodyParser.urlencoded({ extended: true }));

function unlockSecret(req, res, next) {
    console.log(req.body);
    const enteredPassword = req.body["password"];

    if (enteredPassword === password) {
        userIsAuthorised = true;
    }
    next();
}

app.use(unlockSecret);


app.get("/", (req, res) => {
    res.sendFile(__dirname + `/public/index.html`);
});


app.post("/submit", (req, res) => {
     if (userIsAuthorised) {
        res.sendFile(__dirname + `/public/secret.html`);
    }
    else {
        res.send(`<div>  
                <h1> You have entered the wrong password.  try again!!!</h1>
            </div>`);
            res.redirect("/");
    }
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
