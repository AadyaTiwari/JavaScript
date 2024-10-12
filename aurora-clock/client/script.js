const clockElement = document.getElementById('clock');
const heartAuraElement = document.getElementById('heart-aura');
const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}`;
}

function updateGradient() {
    const color1 = color1Input.value;
    const color2 = color2Input.value;
    heartAuraElement.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
    heartAuraElement.style.boxShadow = `0 0 20px ${color1}, 0 0 30px ${color2}`;
}

color1Input.addEventListener('input', updateGradient);
color2Input.addEventListener('input', updateGradient);

setInterval(updateClock, 1000);
updateClock();
