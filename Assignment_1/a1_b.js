// BIT116: Assignment 1 Part 2 - calcu() function with if/elseif/else
//////////////////////////////////////////////////////////////////////////////////////////////
// The value from the HTML page is passed through calcu() as a parameter argument,
// e.g., calcu('1') which takes the place of 'calcValue' entering the function below
// which is then passed to the if/elseif/else statements for comparison. If the value
// of calcValue equals '1' then the first 'if' will be true and the value of the output text
// box will be a '1' with the += concatenating this value every time the button is pressed.
// The eval() fuction at the bottom turns all the concatenated string into an arithmetic
// equation that can be evalutated, thus allowing the calculator to produce a viable answer.
//////////////////////////////////////////////////////////////////////////////////////////////
//DJ Standish
function calcu(calcValue) {
	if (calcValue == "ce") {
		calc.output.value = "";
	} else if (calcValue == "evaluate") {
		finalNumber = eval(document.calc.output.value);
		if (!isFinite(finalNumber)) {
			finalNumber = "0";
		}
		calc.output.value = finalNumber; // <-- the eval() function turns the collection of string into a working math function
	} else {
		calc.output.value += calcValue;
	}
}
