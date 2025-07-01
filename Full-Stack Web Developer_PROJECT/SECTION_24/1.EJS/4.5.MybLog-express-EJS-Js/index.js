import express from "express";
// Express parses urlencoded by itself
import multer from "multer";
import path from "path";

const app = express();
const port = 3000;

// Set view engine to EJS
app.set("view engine", "ejs");

// Serve static files
app.use(express.static("public"));
app.use(express.static("public/assets"));

// Set up multer storage to save in 'public/assets/images'
const storage = multer.diskStorage({ 
    destination: (req, file, cb) => {
        cb(null, "./public/assets/images"); // folder to save files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // unique name with timestamp
    },
});

// Initialize upload
const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    res.render("index"); // views/index.ejs
});

// Handle form submission with file upload
app.post("/submit", upload.single("blog-image"), (req, res) => {
    const name = req.body.name;
    const title = req.body.title;
    const msg = req.body["blog-content"];

    // The uploaded file is available at req.file
    // Store its path relative to "public" for easy accessing
    const image = req.file ? "/assets/images/" + req.file.filename : null;

    const date = req.body.date;

    res.render("index", { name, title, msg, image, date });

    console.log(req.body);
    console.log(req.file);
});

// View a single post
app.get("/blog", (req, res) => {
    res.render("post"); // views/post.ejs
});

// Contact page
app.get("/contact", (req, res) => {
    res.render("contact_us"); // views/contact_us.ejs
});

// Start server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
