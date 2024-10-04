// client/script.js

async function fetchTime() {
    try {
        const response = await fetch('/time');
        const data = await response.json();
        document.getElementById('time').innerText = data.time;
    } catch (error) {
        console.error('Error fetching time:', error);
    }
}

setInterval(fetchTime, 1000);
fetchTime();
