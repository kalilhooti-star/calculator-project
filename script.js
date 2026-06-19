const display = document.getElementById('display');

function appendToDisplay(input) {
    if (display.innerText === '0') display.innerText = input;
    else display.innerText += input;
}

function clearDisplay() { display.innerText = "0"; }

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === "") display.innerText = "0";
}

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace('×', '*').replace('÷', '/'));
    } catch {
        display.innerText = "خطا";
    }
}
function placeholder() { alert("قابلیت تبدیل واحد"); }