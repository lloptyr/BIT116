function checkForS(){
    let username=prompt("Please Enter a Username");
    let firstChar=username.charAt(0);
    if(firstChar=="S"){
        document.getElementById("userDisplay").innerHTML="Username: "+username;
    }
    else{
        document.getElementById("userDisplay").innerHTML="You suck. Start your username with \"S\" to not suck!"
    }
}