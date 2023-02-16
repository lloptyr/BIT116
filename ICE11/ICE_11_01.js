//This is part 1
function tempConversion() {
	let convertedTemp;
	let originalTemp = parseFloat(document.getElementById("temp").value);
	let conversionSystem = $("input:radio[name=tempSystem]:checked").val();
	if (isNaN(originalTemp)) {
		alert("Please enter only numbers");
	} else {
		if (conversionSystem == "farenheit") {
			convertedTemp = ((originalTemp - 32) * 5) / 9;
			document.getElementById("tempOut").innerHTML =
				originalTemp + "F is equal to " + convertedTemp + "C";
		} else if (conversionSystem == "celsius") {
			convertedTemp = (originalTemp * 9) / 5 + 32;
			document.getElementById("tempOut").innerHTML =
				originalTemp + "C is equal to " + convertedTemp + "F";
		} else {
			document.getElementById("tempOut").innerHTML = "Please select an option";
		}
	}
}
//This is part 2
function veggieFacts() {
	let veggieSelected = $("input:radio[name=veggieChoice]:checked").val();
	let newVeggieFact;
	switch (veggieSelected) {
		case "tomato":
			newVeggieFact =
				"Found at Walt Disney World Resort, Florida, USA, the largest single tomato plant in the world covers an area of 56.73 metres sq. That’s bigger than an Olympic size swimming pool!";
			break;
		case "beet":
			newVeggieFact =
				"Because beetroot juice helps cleanse the liver, it also helps reduce hangover symptoms.";
			break;
		case "carrot":
			newVeggieFact =
				"Baby carrots are not a type of carrot. They started with Mike Yurosek, a California farmer who did not want to keep throwing out blemished carrots. He started cutting and peeling the vegetables to make them appear perfect.";
			break;
		case "potato":
			newVeggieFact =
				"Potatoes can grow to a height of 4700 meters. The common commercial varieties of the crop are just a few of the 5,000 known varieties that have their individual culinary and agricultural attributes. What's even more amazing is that they could grow from sea level up to 15,420 feet above sea level. That's a good 4,700-meter rise right there!";
			break;
		default:
			newVeggieFact = "Please Select a Veggie";
			break;
	}
	document.getElementById("veggieFaxOut").innerHTML = newVeggieFact;
}
//This is Part 3
function dollarConversion() {
	let dollarAmount = document.getElementById("dollar").value;
	let convertTo = $("input:radio[name=dollarExchange]:checked").val();
	let convertedMonetaryValue;
	if (isNaN(dollarAmount)) {
		alert("Please enter only numbers");
	} else {
		switch (convertTo) {
			case "ruble":
				convertedMonetaryValue = dollarAmount * 74.65;
				break;
			case "euro":
				convertedMonetaryValue = dollarAmount * 0.92;
				break;
			case "yen":
				convertedMonetaryValue = dollarAmount * 134.16;
				break;
			case "mark":
				convertedMonetaryValue = dollarAmount * 1.82684;
				break;
		}
		document.getElementById("dollarExchangeOut").innerHTML =
			"$" +
			dollarAmount +
			" = " +
			convertedMonetaryValue +
			" " +
			convertTo +
			"(s)";
	}
}
//This is Part 4
function internationalCurrencyConverter() {
	let givenCurrency = document.getElementById("currencyIn").value;
	let startingCurrency = $("input:radio[name=currencyExchange1]:checked").val();
	let endingCurrency = $("input:radio[name=currencyExchange2]:checked").val();
	let currencyMap = new Map();
	currencyMap.set("usd", 1);
	currencyMap.set("ruble", 74.65);
	currencyMap.set("euro", 0.92);
	currencyMap.set("yen", 134.16);
	currencyMap.set("mark", 1.82684);
	if (isNaN(givenCurrency)) {
		alert("Please enter only numbers");
	} else {
		let currencyOut =
			(givenCurrency * currencyMap.get(endingCurrency)) /
			currencyMap.get(startingCurrency);
		document.getElementById("internationalExchangeOut").innerHTML =
			givenCurrency +
			" " +
			startingCurrency +
			" = " +
			currencyOut +
			" " +
			endingCurrency;
	}
}
