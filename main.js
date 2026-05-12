const generateBtn = document.getElementById('generate-btn');
const numberDisplay = document.getElementById('number-display');

generateBtn.addEventListener('click', () => {
    generateAndDisplayNumbers();
});

function generateAndDisplayNumbers() {
    numberDisplay.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach((number, index) => {
        const ball = document.createElement('div');
        ball.className = `number-ball color-${(index % 6) + 1}`;
        ball.textContent = number;
        numberDisplay.appendChild(ball);
    });
}

// Initial generation
generateAndDisplayNumbers();
