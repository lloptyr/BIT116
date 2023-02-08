function getPhone(){
    let checkPhone=phone.value;
    let toMatch=/^\d{3}-\d{3}-\d{4}$/;
    if (toMatch.test(checkPhone)){
        alert("Thank you. Your phone number has been sold to Nigerian Scammers")
    }
    else{
        alert("Please give a valid phone number \"###-###-####\"");
    }
    console.log(checkPhone);
    console.log(toMatch.test(checkPhone));

}