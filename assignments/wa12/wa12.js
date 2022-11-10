const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);

const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
const plusButton = document.querySelector('.plus-button').addEventListener('click', plus);
const randomButton = document.querySelector('.random-button').addEventListener('click', random);
const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);


function minus() {
    if (outputInt > 0)
    {
        outputInt -= 1;
        output.textContent = outputInt;
    }
}

function plus() {
    if (outputInt < 9999999999)
    outputInt += 1;
    output.textContent = outputInt;
}

function random() {
    outputInt = Math.floor((Math.random() * 9999999999 + 1));
    output.textContent = outputInt;
}

function reset() {
    const resetValue = 0000000000;
    outputInt = resetValue;
    output.textContent = outputInt;
}

function submit() {
    alert(output.textContent);
}
/*const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');

button.addEventListener('click', updateOutput);

function updateOutput() {
    output.textContent = phone_content.value;
}*/

var slider = document.getElementById('myRange');
var sliderSubmit = document.querySelector('.slider-submit-button').addEventListener('click', update);
var sliderOutput = document.querySelector('.slider-output');

function update() {
    sliderOutput.textContent = slider.value;
}