
import express from "express";
import bodyParser from "body-parser";


// var name = "";
// var title = "";
// var msg = "";
// var image = "";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public/"));
app.use(express.static("./public/assets"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submitBlog", (req, res) => {
    const name = req.body['name'];
    const title = req.body['title'];
    const msg = req.body['blog-content'];
    const image = req.body['blog-image'];
    const date = req.body['date']
    res.render("post.ejs", { name: name, title : title, msg : msg , image: image, date: date});

    console.log(name +" " + title+" " +  msg +" " + image +" " + date)
})

app.get("/blog", (req, res) => {
    res.render("post.ejs");
})

app.get("/contact", (req, res) => {
    res.render("contact_us.ejs");
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});






// . Post Creation: Users should be able to create new posts.

// 2. Post Viewing: The home page should allow the user to view all their posts.

// 3. Post Update/Delete: Users should be edit and delete posts as needed.

// 3. Styling: The application should be well-styled and responsive, ensuring a good user experience on both desktop and mobile devices.