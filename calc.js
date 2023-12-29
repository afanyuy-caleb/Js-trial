let screen = document.querySelector('#screen');
let buttons = document.querySelectorAll('button');

screen.value = 0;
let firstNumber = 0
let result = 0;
let test = false;
var symbol;

// ACtions for the clicking from the keyboard
document.body.addEventListener('keydown', (event)=>{
  checkData(event.key)
})

buttons.forEach((button, index) => {

  button.addEventListener('click', ()=>{
    checkData(button.innerText);
  })
  
});

function checkData(button){
  let value = button;
  let isNum = Number(value);

  if(isNum || isNum == 0 || value == '.'){

    // Check if a dot already exists in the number
    if(screen.value.includes('.') && value === '.'){
      firstNumber = '';
    }
    else{
      firstNumber = isNum || value;
    }

    // Print out number to the screen

    if(screen.value === "0" || test){
      screen.value = firstNumber;
      test = false;
    }
    else{
      screen.value += firstNumber;
    }
  
  }
  else {
    // Clearing the screen
    if(value === "Del" || value === "Delete"){
      
      screen.value = Math.floor(Number(screen.value)/10);
      
      firstNumber = (screen.value !== "0")?'': 0;

      // Replace the value for the result as the user deletes 
      result = Number(firstNumber);
  
    }
    else{
      if(value === '=' || event.key === 'Enter'){

        screen.value = answer(symbol, result, screen.value);

        // Reset everything
        symbol = '';
        result = 0;
        firstNumber = 0;

      }
      else{

        result = Number(screen.value)
        firstNumber = '';
        test = true;

        if(value === "+"){
          symbol = '+';
        }
        if(value === "-"){
          symbol = '-';
        }
        if(value === "/"){
          symbol = '/';
        }
        if(value === "*"){
          symbol = '*';
        }
  
      }
      
    }

  }
}

//Compute the answer
function answer(sym, first, second){

  test = true;
  switch(sym){
    case '+':{
      return first + Number(second);
    break;
    }
    case '-':{
      return first - Number(second);
    } 
    break;
    case '/':{
      return first / Number(second);
    } 
    break;
    case '*':{
      return first * Number(second);
    } 
    break;
  }
}
