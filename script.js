const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        display.textContent = display.textContent === '0' ? value : display.textContent + value;
    });
});

/*part 2*/

let currentOperand = '';
let previousOperand = '';
let operation = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value >= '0' && value <= '9') {
            currentOperand += value;
            display.textContent = currentOperand;
        } else if (['+', '-', '*', '/'].includes(value)) {
            operation = value;
            previousOperand = currentOperand;
            currentOperand = '';
        } else if (value === '=') {
            const result = eval(`${previousOperand} ${operation} ${currentOperand}`);
            display.textContent = result;
            currentOperand = result;
            operation = null;
        } else if (value === 'C') {
            currentOperand = '';
            previousOperand = '';
            operation = null;
            display.textContent = '0';
        }
    });
});
