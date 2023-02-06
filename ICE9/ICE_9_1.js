let myFamily =["DJ", "Kiwi","Margaret","Dennis", "Daniel", "Bear"]
function printFamily() {
    for(member in myFamily){
        document.getElementById("familyNames").append(" "+myFamily[member]);
    }
}