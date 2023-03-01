function computer(speed, hdspace, ram) {
	this.speed = speed;
	this.hdspace = hdspace;
	this.ram = ram;
	this.price = getPrice;
}
let workComputer = new computer("3.4GHz", "500GB", "4GB");
let homeHomputer = new computer("4GHz", "1TB", "16GB");
let laptop = new computer("2.93GHz", "250GB", "8GB");
function getPrice() {
	let thePrice = 500;
	thePrice += this.speed == "4GHz" ? 300 : 100;
	thePrice += this.hdspace == "1TB" ? 150 : 80;
	thePrice += this.ram == "16GB" ? 200 : 100;
	return thePrice;
}
let workComputerPrice = workComputer.price();
let homeHomputerPrice = homeHomputer.price();
let laptopPrice = laptop.price();
function doPricing() {
	document.getElementById("prices").innerHTML =
		"Work computer: " +
		"Speed: " +
		workComputer.speed +
		", Storage: " +
		workComputer.hdspace +
		", Ram: " +
		workComputer.ram +
		", Price: $" +
		workComputerPrice +
		"<br>";
	document.getElementById("prices").innerHTML +=
		"Home computer: " +
		"Speed: " +
		homeHomputer.speed +
		", Storage: " +
		homeHomputer.hdspace +
		", Ram: " +
		homeHomputer.ram +
		", Price: $" +
		homeHomputerPrice +
		"<br>";
	document.getElementById("prices").innerHTML +=
		"Laptop: " +
		"Speed: " +
		laptop.speed +
		", Storage: " +
		laptop.hdspace +
		", Ram: " +
		laptop.ram +
		", Price: $" +
		laptopPrice +
		"<br>";
}
