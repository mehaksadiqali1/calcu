"use strict"

let currentInput = '';

function appendTooDisplay(value) {
    currentInput += value;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
        setTimeout(clearDisplay, 1500); 
    }
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}
