const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse form data

app.post('/submit-your-contact-info', (req, res) => {
    // Extract data from request body
    const { name, email, contact_reason, contact_pref, message } = req.body;
    console.log('Form submission received:');
    console.log(`Name: ${name}, Email: ${email}, Reason: ${contact_reason}, Preferences: ${contact_pref}, Message: ${message}`);
    
    // Send a response back to the client
    res.send('Thank you for your message, we will be in touch soon!');
});

