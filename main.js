const generateBtn = document.getElementById('generate-btn');
const numberDisplay = document.getElementById('number-display');
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Theme Toggle Logic
themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLightMode = body.classList.contains('light-mode');
    themeBtn.textContent = isLightMode ? 'Dark Mode' : 'Light Mode';
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeBtn.textContent = 'Dark Mode';
}

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

