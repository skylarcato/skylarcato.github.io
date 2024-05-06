const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Use bodyParser to parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// POST route to handle form submission
app.post('/submit-your-contact-info', (req, res) => {
    const { name, email, contact_reason, contact_pref, message } = req.body;
    console.log('Received contact info:');
    console.log(`Name: ${name}, Email: ${email}, Reason: ${contact_reason}, Preferences: ${contact_pref}, Message: ${message}`);
    // Here, you would typically handle storing the data or sending an email
    res.send('Thank you for contacting us, your message has been received.');
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
