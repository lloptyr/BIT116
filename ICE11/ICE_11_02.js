//Part 1
function calculateTotal() {
	let sum = 0;
	document.getElementById("costSum").innerHTML = " ";
	if ($("#stereo").is(":checked")) {
		sum += 200;
	}
	if ($("#leatherSeats").is(":checked")) {
		sum += 100;
	}
	if ($("#fuzzyDice").is(":checked")) {
		sum += 10;
	}
	if ($("#softtop").is(":checked")) {
		sum += 1500;
	}
	if (sum == 0) {
		alert("Please make at least one purchase to continue");
	} else {
		document.getElementById("costSum").innerHTML =
			"Your total upgrade cost is $" + sum;
	}
}
function convertCurrency() {
	document.getElementById("convertedCurrency").innerHTML = " ";
	let dollarAmount = document.getElementById("dollars").value;
	if (isNaN(dollarAmount)) {
		alert("Please only enter numbers");
	} else if (
		!(
			$("#usd").is(":checked") ||
			$("#ruble").is(":checked") ||
			$("#euro").is(":checked") ||
			$("#yen").is(":checked") ||
			$("#mark").is(":checked")
		)
	) {
		alert("Please select at least one currency to convert to");
	} else {
		if ($("#usd").is(":checked")) {
			document.getElementById("convertedCurrency").innerHTML +=
				"In USD: " + dollarAmount + "<br/>";
		}
		if ($("#ruble").is(":checked")) {
			rubleAmount = dollarAmount * 74.65;
			document.getElementById("convertedCurrency").innerHTML +=
				"In Rubles: " + rubleAmount + "<br/>";
		}
		if ($("#euro").is(":checked")) {
			euroAmount = dollarAmount * 0.92;
			document.getElementById("convertedCurrency").innerHTM +=
				"In Euros: " + euroAmount + "<br/>";
		}
		if ($("#yen").is(":checked")) {
			yenAmount = dollarAmount * 134.16;
			document.getElementById("convertedCurrency").innerHTML +=
				"In Yen: " + yenAmount + "<br/>";
		}
		if ($("#mark").is(":checked")) {
			markAmount = dollarAmount * 1.82684;
			document.getElementById("convertedCurrency").innerHTML +=
				"In German Marks: " + markAmount + "<br/>";
		}
	}
}
