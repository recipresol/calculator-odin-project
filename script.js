let operations = [
    {key: '+', fn: (a, b) => a + b},
    {key: '-', fn: (a, b) => a - b},
    {key: '*', fn: (a, b) => a * b},
    {key: '/', fn: (a, b) => a / b},
]

function operate(operator, a, b) {
    return operations.filter((op) => op.key = operator)[0](a, b);
}

let a, b = 0;
let disp = 0;

let display = document.querySelector("#display");
function addDigit(digit) {
    disp = 10 * disp + digit;
    display.textContent = disp;
}

let digitsDiv = document.querySelector("#digits");
for (let i = 0; i < 10; i++) {
    let digitButton = document.createElement("button");
    digitButton.textContent = i;
    digitButton.addEventListener("click", () => { addDigit(i) });
    digitsDiv.appendChild(digitButton);
}

let addButton = document.querySelector("#add");
let subButton = document.querySelector("#sub");
let mulButton = document.querySelector("#mul");
let divButton = document.querySelector("#div");
let clrButton = document.querySelector("#clr");

