function validateForm() {
    //console.log(checkValidAddress() + "," + checkValidOTP() + "," + checkValidAmount());
    if(checkValidAddress() && checkValidAmount() && checkValidOTP()){
        window.location = "main.html";
    }


}

//check for validity of bitcoin address
function checkValidAddress() {
    let hasPassCheck = true;

    const input_address = document.getElementById("input-address").value;
    let firstChar = input_address.charAt(0);
    let firstThreeChar = input_address.substr(0, 3);
    console.log(firstChar + "," + firstThreeChar);
    //checking for invalid address length
    if (input_address.length < 26 || input_address.length > 35) {
        hasPassCheck = false;
        window.alert("Bitcoin address must be 26-35 characters long!");
    }
    //checking for invalid starting characters
    if (firstChar !== '1' && firstChar !== '3' && firstThreeChar !== "bc1") {
        hasPassCheck = false;
        window.alert("Bitcoin address must start with either 1,3 or bc1!");
    }
    //checking for non-alphanumeric characters
    const letterNumber = /^[0-9a-zA-Z]/;
    if (!input_address.match(letterNumber)) {
        hasPassCheck = false;
        window.alert("Bitcoin address must be alphanumeric");
    }
    return hasPassCheck;
}

//check for validity of OTP
function checkValidOTP() {
    let hasPassCheck = true;
    const input_otp = document.getElementById("input-otp").value;
    if (input_otp.length !== 6) {
        hasPassCheck = false;
        window.alert("OTP must be 6 characters long!")
    }
    return hasPassCheck;
}

//check for validity of transfer amount
function checkValidAmount() {
    let hasPassCheck = true;
    const input_amount = document.getElementById("input-amount").value;
    const numRequired = /^[0-9]\d*(\.\d{0,4})?/;
    if (!input_amount.match(numRequired)) {
        hasPassCheck = false;
        window.alert("Invalid amount Entered!");
    }
    return hasPassCheck;
}

