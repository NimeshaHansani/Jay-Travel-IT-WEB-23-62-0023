function validate(){
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("lsat_name").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phone_number").value;
    var error_message = document.getElementById("error_message");

    error_message.innerHTML = "";
    
    error_message.style.padding = "10px";

    if (firstName === "") {
        error_message.innerHTML += "First Name is required<br>";
        return false;
    }

    if (lastName === "") {
        error_message.innerHTML += "Last Name is required<br>";
        return false;
    }

    if (lastName === "") {
        error_message.innerHTML += "Last Name is required<br>";
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        error_message.innerHTML += "Invalid Email Address<br>";
        return false;
    }

    var phonePattern = /^\d{10}$/;
    if (!phoneNumber.match(phonePattern)) {
        error_message.innerHTML += "Invalid Phone Number (10 digits required)<br>";
        return false;
    }

    return true;
}