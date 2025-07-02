import Client from "pg";

const db = new Client({
    user: "",
    host: "",
    database: "",
    password: "admin1234",
    port: 5432,
});

db.connect();
db.query("SELECT FROM users", (err, res)=> {
    if (err) {
        console.error("error while executing query", err.stack);
    } else {
        console.log("User data are here:", res.rows);
    }
    db.end();
});