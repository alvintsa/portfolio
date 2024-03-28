const express = require('express');
const app = express();
const cors = require('cors');


const PORT = process.env.PORT || 5001;
app.use(cors({ origin: 'http://localhost:3000' }));



// Assuming you're using Express
app.get('/api/test', (req, res) => {
    console.log("wenthere");
    res.json({ message: 'Hello from the backend!' });
});


app.get('/api/projects', (req, res) => {
    // Logic to fetch projects from database
    res.json({ message: 'Get all projects' });
});

app.post('/api/projects', (req, res) => {
    // Logic to add a new project to the database
    res.json({ message: 'Add new project' });
});




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
