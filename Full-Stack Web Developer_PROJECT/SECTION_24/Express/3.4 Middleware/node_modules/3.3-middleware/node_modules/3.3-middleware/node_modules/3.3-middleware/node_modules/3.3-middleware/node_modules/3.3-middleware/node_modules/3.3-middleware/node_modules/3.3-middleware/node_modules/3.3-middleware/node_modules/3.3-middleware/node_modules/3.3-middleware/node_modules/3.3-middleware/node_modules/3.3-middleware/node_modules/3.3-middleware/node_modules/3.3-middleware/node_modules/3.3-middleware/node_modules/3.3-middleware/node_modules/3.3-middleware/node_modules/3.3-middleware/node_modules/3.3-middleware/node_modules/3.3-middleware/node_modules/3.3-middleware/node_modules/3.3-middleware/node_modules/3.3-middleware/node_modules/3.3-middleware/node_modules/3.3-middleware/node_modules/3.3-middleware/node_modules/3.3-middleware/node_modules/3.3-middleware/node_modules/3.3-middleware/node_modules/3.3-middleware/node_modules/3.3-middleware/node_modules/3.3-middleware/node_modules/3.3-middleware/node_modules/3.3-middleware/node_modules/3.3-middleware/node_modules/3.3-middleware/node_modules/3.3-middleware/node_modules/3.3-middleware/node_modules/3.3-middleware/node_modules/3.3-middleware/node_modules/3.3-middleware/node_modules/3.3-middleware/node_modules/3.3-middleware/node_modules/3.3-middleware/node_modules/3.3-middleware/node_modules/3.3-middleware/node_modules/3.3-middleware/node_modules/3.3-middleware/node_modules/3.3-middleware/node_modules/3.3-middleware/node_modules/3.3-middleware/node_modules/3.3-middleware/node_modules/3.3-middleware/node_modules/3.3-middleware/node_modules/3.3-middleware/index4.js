import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3001;
var bandName = "";


app.use(bodyParser.urlencoded({
  extended: true
}));


function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {

  res.sendFile(__dirname + "/public/index.html");

})

app.post("/submit", (req, res) => {
  res.send(` <div> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcrJeS4mmCvyD1FMBDLE6F0uRrg5Lcp4-Xz2psMcC_YTOPGhAbnIrehY4MNy6KD31q15I&usqp=CAU" /> 
              <h1> your band name is :  <h2>${bandName}</h2></h1>
    </div>`);
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
