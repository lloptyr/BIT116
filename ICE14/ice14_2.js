function annoyingPopUpMode() {
	//all of these properties seem to be deprecated, with navigator.product only returning gecko for any browser
	alert("Hi! You are viewing my page with " + navigator.appCodeName);
	if (navigator.javaEnabled()) {
		alert("You have Java enabled, that is cool!");
	} else {
		alert("No Java? Well, no fun stuff here then.");
	}
	alert("You are using " + navigator.platform + " " + navigator.product);
}
