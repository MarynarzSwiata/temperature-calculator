'use strict mode';

// VARIABLES
let value1 = document.getElementById('value-1-label');
let value2 = document.getElementById('value-2-label');
let value3 = document.getElementById('value-3-label');

// MAIN FUNCTION
function calculateTemp () {
    const value = Number(document.getElementById('value').value);
    const type = document.getElementById('type').value;
    
    if (type === 'celsius') {
        const celsiusFahrenheit = (value * 9/5) + 32;
        const celsiusKelvin = value + 273.15;
        const celsiusRankine = value * 9/5 + 491.67;
        value1.innerHTML = (`${celsiusFahrenheit.toFixed(2)} °F`);
        value2.innerHTML = (`${celsiusKelvin.toFixed(2)} K`);
        value3.innerHTML = (`${celsiusRankine.toFixed(2)} °R`);
    } else if (type === 'fahrenheit') {
        const fahrenheitCelsius = (value - 32) * 5/9;
        const fahrenheitKelvin = (value + 459.67) * 5/9;
        const fahrenheitRankine = value + 459.67;
        value1.innerHTML = (`${fahrenheitCelsius.toFixed(2)} °C`);
        value2.innerHTML = (`${fahrenheitKelvin.toFixed(2)} K`);
        value3.innerHTML = (`${fahrenheitRankine.toFixed(2)} °R`);
    } else if (type === 'kelvin') {
        const kelvinCelsius = value - 273.15;
        const kelvinFahrenheit = (value * 9/5) - 459.67;
        const kelvinRankine = value * 9/5;
        value1.innerHTML = (`${kelvinCelsius.toFixed(2)} °C`);
        value2.innerHTML = (`${kelvinFahrenheit.toFixed(2)} °F`);
        value3.innerHTML = (`${kelvinRankine.toFixed(2)} °R`);
    } else {
        const rankineCelsius = (value * 5/9) - 273.15;
        const rankineFahrenheit = value - 549.67;
        const rankineKelvin = value * 5/9;
        value1.innerHTML = (`${rankineCelsius.toFixed(2)} °C`);
        value2.innerHTML = (`${rankineFahrenheit.toFixed(2)} °F`);
        value3.innerHTML = (`${rankineKelvin.toFixed(2)} K`);
    }

}

// MAIN

// BUTTON LISTENER
calculate.addEventListener('click', calculateTemp);