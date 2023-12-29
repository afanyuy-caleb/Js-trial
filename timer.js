
const buttons = document.querySelectorAll('.btns button');
let timers = document.querySelectorAll('.clock i');
const span = document.querySelectorAll('.clock span')

let intervalId;
let isTicking = false;

buttons.forEach((value, index)=>{
  
  value.addEventListener('click', ()=>{
    
    if (index == 2 && !isTicking){
      isTicking = true;
      
      intervalId = setInterval(()=>{
        timers[2].innerText++;

        if(timers[2].innerText == 59){

          if(timers[1].innerText == 59){

            timers[0].innerText++;
            timers[1].innerText = 0;
          }else{
            timers[1].innerText++;
          } 
          timers[2].innerText = 0;
        }

      
      }, 1000)
    }
    else {
      isTicking = false;
      clearInterval(intervalId);
      if(index == 1){
        timers.forEach((value, time)=>{
          value.innerText = '00';
        })
      }
    }

    if(isTicking){

      // Start the animation
      span.forEach(value=>{
        value.style.animationDuration = '1s'
      })

      buttons[2].classList = "fas fa-pause";
      buttons[2].title = "Pause";

    }else{

      span.forEach(value=>{
        value.style.animationDuration = '0s'
      })
      buttons[2].classList = "fas fa-play";
      if(timers[2].innerText){
        buttons[2].title = "Resume";  
      }
      else{
        buttons[2].title = "Start";
      }
      
    }
    
  })
})


