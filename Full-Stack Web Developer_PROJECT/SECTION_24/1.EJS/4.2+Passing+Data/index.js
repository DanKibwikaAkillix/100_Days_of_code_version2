import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const fnameLetter = req.body["fName"].length;
  const lnameLetter = req.body["lName"].length;

  let fullLength = fnameLetter + lnameLetter;
  res.render("index.ejs", {numLetters: fullLength})
  console.log(fullLength);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
