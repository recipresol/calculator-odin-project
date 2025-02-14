function format(x) {
    x = x.toString();
    return x.slice(0, Math.min(15, x.length));
}

let operations = [
    {key: '+', fn: (a, b) => a + b},
    {key: '-', fn: (a, b) => a - b},
    {key: '*', fn: (a, b) => a * b},
    {key: '/', fn: (a, b) => b != 0 ? a / b : NaN},
]

function operate(fn) {
    b = newEntry ? entry : b;
    a = fn(a, b);
    if (isNaN(a)) {
        allClear("DIV BY 0 ERR");
        return;
    }
    if (a < Number.MIN_SAFE_INTEGER || Number.MAX_SAFE_INTEGER < a) {
        allClear("SIZE ERR");
        return;
    }
    display.textContent = format(a);
    entry = 0;
    newEntry = false;
}

let a = 0;
let b = 0;
let entry = 0;
let newEntry = false;
let currentOp = (a, b) => b;

function allClear(disp) {
    a = 0;
    b = 0;
    entry = 0;
    newEntry = false;
    currentOp = (a, b) => b;
    display.textContent = disp;
}

let display = document.querySelector("#display");
function addDigit(digit) {
    newEntry = true;
    entry = 10 * entry + digit;
    display.textContent = format(entry);
}

let digitsDiv = document.querySelector("#digits");
for (let i = 9; i >= 0 ; i--) {
    let digitButton = document.createElement("button");
    digitButton.setAttribute("class", "btn")
    digitButton.textContent = i;
    digitButton.addEventListener("click", () => { 
        addDigit(i); 
    });
    digitsDiv.appendChild(digitButton);
}

let operatorsDiv = document.querySelector("#operators");
operations.forEach((op) => {
    let opButton = document.createElement("button");
    opButton.setAttribute("class", "btn");
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
        display.textContent = 0;
    }
});

let claButton = document.querySelector("#cla");
claButton.addEventListener("click", () => {
    allClear(0);
});
