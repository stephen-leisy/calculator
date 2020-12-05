// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

const firstAdd = document.getElementById('first-number-to-add');
const secondAdd = document.getElementById('second-number-to-add');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-display');
const firstSubtract = document.getElementById('first-number-to-subtract');
const secondSubtract = document.getElementById('second-number-to-subtract');
const subtractButton = document.getElementById('subtract-button');
const subtractResult = document.getElementById('subtract-display');
const firstMultiply = document.getElementById('first-number-to-multiply');
const secondMultiply = document.getElementById('second-number-to-multiply');
const multiplyButton = document.getElementById('multiply-button');
const multiplyResult = document.getElementById('multiply-display');
const firstDivide = document.getElementById('first-number-to-divide');
const secondDivide = document.getElementById('second-number-to-divide');
const divideButton = document.getElementById('divide-button');
const divideResult = document.getElementById('divide-display');

addButton.addEventListener('click', () => {
    const number1 = Number(firstAdd.value);
    const number2 = Number(secondAdd.value);
    const result = number1 + number2;
    addResult.textContent = result;
});
subtractButton.addEventListener('click', () => {
    const number1 = Number(firstSubtract.value);
    const number2 = Number(secondSubtract.value);
    const result = number1 - number2;
    subtractResult.textContent = result;
});
multiplyButton.addEventListener('click', () => {
    const number1 = Number(firstMultiply.value);
    const number2 = Number(secondMultiply.value);
    const result = number1 * number2;
    multiplyResult.textContent = result;
});
divideButton.addEventListener('click', () => {
    const number1 = Number(firstDivide.value);
    const number2 = Number(secondDivide.value);
    const result = number1 / number2;
    divideResult.textContent = result;
});