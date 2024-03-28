const express = require("express");
const app = express();
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
require('dotenv').config();




const PORT = process.env.PORT || 5001;
app.use(cors({ origin: "http://localhost:3000" }));

// Parse JSON bodies
app.use(express.json());



// Assuming you"re using Express
app.get("/api/test", (req, res) => {
    console.log("wenthere");
    res.json({ message: "Hello from the backend!" });
});


app.get("/api/projects", (req, res) => {
    // Logic to fetch projects from database
    res.json({ message: "Get all projects" });
});

app.post("/api/projects", (req, res) => {
    // Logic to add a new project to the database
    res.json({ message: "Add new project" });
});


app.post("/api/contact", (req, res) => {
    // Logic to input contact info into database
    const { name, email, message } = req.body;

    try {
    // Open a database connection
    const db = new sqlite3.Database(process.env.DB_PATH);

    // Create a table
    // serialize makes it so that commands are run seuentially, one after the other
    db.serialize(() => {
        db.run("CREATE TABLE IF NOT EXISTS contacts (name TEXT, email TEXT, message TEXT)");
        db.run("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)", [name, email, message]);
    });
    db.close();

    res.json({ message: "Successfully sent contact information!" });

    } 
    catch(error) {
        res.status(500).json({ message: "There was an issue processing your request. Please try again." });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
