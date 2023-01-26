function passwordChecker() {
	givenPass = passwordField.pw.value;
	if (givenPass == "") {
		alert("Please enter a Password");
	} else if (givenPass != "bit116") {
		alert("Password incorrect. Try again. Note: Passwords are case sensitive");
	} else {
		alert("Thank you. You will be redirected shortly");
	}
}
