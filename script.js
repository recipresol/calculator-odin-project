let operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
}

function operate(operator, a, b) {
    return operations[operator](a, b);
}

let display = document.querySelector("#display");
function addDigit(digit) {
    if (display.textContent != "0") {
        display.textContent += digit;
    }
    else {
        display.textContent = digit;
    }
}

let addButton = document.querySelector("#add");
let subButton = document.querySelector("#sub");
let mulButton = document.querySelector("#mul");
let divButton = document.querySelector("#div");
let clrButton = document.querySelector("#clr");

let digitsDiv = document.querySelector("#digits");
for (let i = 0; i < 10; i++) {
    let digitButton = document.createElement("button");
    digitButton.textContent = i;
    digitButton.addEventListener("click", () => { addDigit(parseInt(i)) });
    digitsDiv.appendChild(digitButton);
}