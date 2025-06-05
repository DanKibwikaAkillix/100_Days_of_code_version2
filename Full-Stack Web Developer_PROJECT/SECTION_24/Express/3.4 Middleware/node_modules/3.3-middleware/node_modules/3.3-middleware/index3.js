import express from "express";
// import logger from "morgan"

const app = express();
const port = 3001;

function logger(req, res, next) {
  console.log("Request method: ", req.method);
  console.log("URl: ", req.url);
  next();
}
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
