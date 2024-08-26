let cash = 0;
let currentPayout = 0;

function updateDisplay() {
    document.getElementById('cashDisplay').textContent = `Cash: $${cash.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById('previousPayout').textContent = `${getWeight()}: $${currentPayout.toFixed(2)}`;
}

function getWeight() {
    if (currentPayout <= 133) return "Light";
    if (currentPayout <= 266) return "Medium";
    return "Heavy";
}

function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 80%, 60%)`;
}

function newBalloon() {
    // Add the current payout to cash (if it's not the first balloon)
    if (currentPayout > 0) {
        cash += currentPayout;
    }
    
    // Generate new payout
    currentPayout = Math.floor(Math.random() * 400) + 1;
    
    // Change balloon color
    const balloon = document.querySelector('.balloon');
    balloon.style.backgroundColor = getRandomColor();
    
    // Add a "pop" effect
    balloon.style.transform = 'scale(1.1)';
    setTimeout(() => {
        balloon.style.transform = 'scale(1)';
    }, 100);
    
    updateDisplay();
}

document.getElementById('newBalloon').addEventListener('click', newBalloon);

// Initialize
newBalloon();