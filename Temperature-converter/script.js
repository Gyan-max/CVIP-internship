function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

function convertTemperature() {
    var temp = document.getElementById('temperature').value;
    var unit = document.getElementById('unit').value;
    var result = document.getElementById('result');

    if (temp === '') {
        result.innerHTML = 'Please enter a temperature value.';
        return;
    }

    temp = parseFloat(temp);

    var convertedTemp;
    if (unit === 'Celsius') {
        convertedTemp = (temp * 9 / 5) + 32;
        result.innerHTML = `${convertedTemp.toFixed(2)} Fahrenheit`;
    } else if (unit === 'Fahrenheit') {
        convertedTemp = (temp - 32) * 5 / 9;
        result.innerHTML = `${convertedTemp.toFixed(2)} Celsius`;
    } else if (unit === 'Kelvin') {
        convertedTemp = temp + 273.15;
        result.innerHTML = `${convertedTemp.toFixed(2)} Kelvin`;
    }
}