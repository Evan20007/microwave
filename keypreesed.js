 function KeyPressed(){
    if(keyCode == BackSpace){
        microwave.resetMicrowave();
    } else if(keyCode === ElementInternals){
        microwave.setTimer();
    } else if (key ==='o'){
  microwave,openDoor();
    } else if(key === 'c'){
        microwave.closeDoor();
    }
 } 