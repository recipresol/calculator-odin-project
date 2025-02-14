let operations = [
    {key: '+', fn: (a, b) => a + b},
    {key: '-', fn: (a, b) => a - b},
    {key: '*', fn: (a, b) => a * b},
    {key: '/', fn: (a, b) => a / b},
]

function operate(fn) {
    b = newEntry ? entry : b;
    a = fn(a, b);
    display.textContent = a;
    entry = 0;
    newEntry = false;
}

let a = 0;
let b = 0;
let entry = 0;
let newEntry = false;
let currentOp = (a, b) => b;

let display = document.querySelector("#display");
function addDigit(digit) {
    newEntry = true;
    entry = 10 * entry + digit;
    display.textContent = entry;
}

let digitsDiv = document.querySelector("#digits");
for (let i = 0; i < 10; i++) {
    let digitButton = document.createElement("button");
    digitButton.textContent = i;
    digitButton.addEventListener("click", () => { 
        addDigit(i); 
    });
    digitsDiv.appendChild(digitButton);
}

let operatorsDiv = document.querySelector("#operators");
operations.forEach((op) => {
    let opButton = document.createElement("button");
    opButton.textContent = op.key;
    opButton.addEventListener("click", () => {
        if (newEntry) {
            operate(currentOp);
        }
        currentOp = op.fn;
    });
    operatorsDiv.appendChild(opButton);
});

let eqsButton = document.querySelector("#eqs");
eqsButton.addEventListener("click", () => {
    operate(currentOp);
});

let cleButton = document.querySelector("#cle");
cleButton.addEventListener("click", () => {
    if (newEntry) {
        entry = 0;
        display.textContent = entry;
    }
});

let claButton = document.querySelector("#cla");
claButton.addEventListener("click", () => {
    a = 0;
    b = 0;
    entry = 0;
    newEntry = false;
    currentOp = (a, b) => b;
    display.textContent = entry;
});
