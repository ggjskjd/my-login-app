const express = require('express');
const path = require('path');
const app = express();

// Parse JSON bodies
app.use(express.json());

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Handle login POST request
app.post('/api/login', (req, res) => {
    console.log('Data received:', req.body);
    res.status(200).send('OK');
});

// Use correct lowercase "process"
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
