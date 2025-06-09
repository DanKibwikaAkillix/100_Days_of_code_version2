import express from "express";
import bodyPaser from "bo"

const app = express();
const port = 3001;


app.get("/", (req, res) => {

    const daysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const d = new Date();
    let day = d.getDay();

    let type = daysWeek[day] + " and it's a week day!";
    let advice = "it's time to work hard";

    if (day === 0 || day === 6) {
        type = daysWeek[day] + "and it's a weekend!";
        advice = "it's time to Rest and have fun";
    }

    res.render("index.ejs", {
        dayType: type,
        advice: advice,
    })
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});