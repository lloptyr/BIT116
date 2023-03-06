window.onload=function(){
    let canvas = document.getElementById("canvas");
    let view= new View(canvas);
    canvas.addEventListener("click", view.handleClick.bind(view), false);
    view.updateDisplay();

}