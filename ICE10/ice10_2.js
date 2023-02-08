function getAddress(){
    let emailAddress=prompt("Please enter a valid Email");
    while(emailAddress.indexOf("@")==-1 || emailAddress.indexOf(".")==-1){
        emailAddress=prompt("An Email must at least contain an \"@\" symbol and an \".\" Please try again.");
    }
    
    alert("Thank you. Your information has now been stolen. GLHF")
    
}