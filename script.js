// Function created to replace the content
function replaceContent() {
    // Declaring the variable
    var myRecipientName;

    // Setting the variable to the input field's value with id named recipientNameInput
    myRecipientName = document.getElementById("recipientNameInput").value;

    // Logging the value to the console for verification
    console.log('Variable myRecipientName: ' + myRecipientName);

    // Setting the HTML code in the span id recipientNamePlaceholder with the variable
    document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;
}

function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    var hamburger = document.querySelector('.hamburger');
    var navItems = navbar.querySelectorAll('li');

    if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
        hamburger.classList.remove('open');
        navItems.forEach((item, index) => {
            item.style.animation = '';
        });
    } else {
        navbar.classList.add('show');
        hamburger.classList.add('open');
        navItems.forEach((item, index) => {
            item.style.animation = `fadeIn 0.5s ease-in-out forwards ${index * 0.1}s`;
        });
    }
}


let volunteers = [];

function displayVolunteers() {
    const volunteerList = document.getElementById('volunteerList');
    volunteerList.value = volunteers.map((volunteer, index) => `${index + 1}. ${volunteer}`).join('\n');
}

document.getElementById('add_button').addEventListener('click', function() {
    const firstName = document.getElementById('first_name').value.trim();
    const lastName = document.getElementById('last_name').value.trim();
    
    if (firstName && lastName) {
        volunteers.push(`${firstName} ${lastName}`);
        displayVolunteers();
    } else {
        alert('Please enter both first and last name.');
    }
});

document.getElementById('delete_button').addEventListener('click', function() {
    const firstName = document.getElementById('first_name').value.trim();
    const lastName = document.getElementById('last_name').value.trim();
    const fullName = `${firstName} ${lastName}`;
    
    const index = volunteers.indexOf(fullName);
    if (index !== -1) {
        volunteers.splice(index, 1);
        displayVolunteers();
    } else {
        alert('Volunteer not found.');
    }
});

document.getElementById('clear_button').addEventListener('click', function() {
    volunteers = [];
    displayVolunteers();
});

document.getElementById('sort_button').addEventListener('click', function() {
    volunteers.sort();
    displayVolunteers();
});
