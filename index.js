let display = document.querySelector(".display-screen");

let button = document.querySelectorAll("td");

let screenValue = "";

// console.log(button);

for(item of button){
    item.addEventListener('click' , (e) => {
        buttonText = e.target.innerText;
        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            display.value = screenValue;
        }
        else if (buttonText == 'C'){
            screenValue = "";
            display.value = screenValue;
        }
        else if (buttonText == '⬅'){
            display.value = screenValue.slice(0, -1);
            screenValue = display.value;
        }
        else if (buttonText == "="){
            display.value = eval(screenValue);

        }
        else{
            screenValue += buttonText;
            display.value = screenValue;
        }
    })
 
};


