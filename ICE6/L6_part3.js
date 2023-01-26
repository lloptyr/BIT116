function compareTwoNumbers() {
	num1 = compareNumbersForm.number1.value;
	num2 = compareNumbersForm.number2.value;
	let numBigger;
    // I did part 3 with validation without reading part 4... whoops
	/*if (isNaN(num1) || isNaN(num2)) {
		numBigger = "One of these is not a number";
	} else {*/
		if (parseFloat(num1) > parseFloat(num2)) {
			numBigger = num1;
		} else if (parseFloat(num2) > parseFloat(num1)) {
			numBigger = num2;
		} else {
			numBigger = "These values are the same";
		}
	//}
	$("#finalCompare").text("The larger number of the two is: ");
	$("#finalCompare").append(numBigger);
}
