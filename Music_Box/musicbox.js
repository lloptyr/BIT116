window.onload=function(){
    let bufferLoader=new BufferLoader(
        Audio.audioContext,
        ["A4.mp3","A5.mp3","C4.mp3","C5.mp3","D4.mp3","D5.mp3","E4.mp3","E5.mp3","G4.mp3","G5.mp3"],
        finshedLoading
    );
    bufferLoader.load();
    
    function finshedLoading(bufferList){
        Audio.init(bufferList);
        let canvas=document.getElementById("canvas");
        let view =new View(canvas);
        canvas.addEventListener("mousedown", view.handleClick.bind(view),false);
        setInterval((view.updateDisplay.bind(view),view.framerate))
    }
}