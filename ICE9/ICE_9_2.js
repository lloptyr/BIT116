let myFamily =new Array("DJ", "Kiwi","Margaret","Dennis", "Daniel", "Bear");
myFamily[6]="David";
myFamily[7]="Katie"
myFamily[8]="Gordon"
myFamily[9]="Melissa"
myFamily[10]="Letty"
function printFamily() {
    for(i=0;i<myFamily.length;i++){
        document.getElementById("familyNames").append(" "+myFamily[i]);
    }
}