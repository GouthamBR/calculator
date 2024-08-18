const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const operators = ["*", "/", "+", "-", "=" ];
let output = "";

const calculate = (btnValue) => {    
    if(btnValue === "=" && output !== ""){
        output = eval(output);
    } else if (btnValue === "RESET"){
        output = "";      
    } else if (btnValue === "DEL"){
        output = output.toString().slice(0,-1);
    }else if (btnValue === '0') {
        if (output.length === 0 ) {
            return;
        }
        output += btnValue; 

    }else {
        if (output === "" && operators.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
})
