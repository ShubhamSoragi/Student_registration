// Add JS here
// Function to validate the form
function validateForm() {
    // Getting form inputs
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var genderMale = document.getElementById("male").checked;
    var genderFemale = document.getElementById("female").checked;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var collegeName = document.getElementById("collegeName").value;
    var course = document.getElementById("course").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var termsChecked = document.getElementById("terms").checked;

    // Validating phone number length
    if (phone.length !== 10) {
        alert("Phone number must be 10 digits.");
        return false;
    }

    // Validating terms and conditions checkbox
    if (!termsChecked) {
        alert("Please accept the Terms and Conditions.");
        return false;
    }

    // If all validations pass, return true
    return true;
}
