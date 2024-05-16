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
    if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
        hamburger.classList.remove('open');
    } else {
        navbar.classList.add('show');
        hamburger.classList.add('open');
    }
}
