const display = document.getElementById('display');
const clearButton = document.getElementById('clear');
let currentCalculation = '';

document.querySelectorAll('.calc-btn').forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button.textContent));
});

clearButton.addEventListener('click', clearCalculation);

function handleButtonClick(value) {
    if (value === '=') {
        try {
            currentCalculation = eval(currentCalculation).toString();
        } catch (error) {
            currentCalculation = 'Error';
        }
    } else if (value !== 'Clear') {
        currentCalculation += value;
    }
    updateDisplay();
} 
 
function clearCalculation() {
    currentCalculation = '';
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentCalculation;
    
    // Adjust font size based on content length
    if (currentCalculation.length > 10) {
        display.classList.add('text-3xl');
        display.classList.remove('text-4xl');
    } else {
        display.classList.add('text-4xl');
        display.classList.remove('text-3xl');
    }
}