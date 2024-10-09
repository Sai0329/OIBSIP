// script.js

// Listen for click event on the "Convert" button
document.getElementById('convertBtn').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');
  
    // Validate the input
    if (isNaN(temperature)) {
      resultDiv.innerHTML = 'Please enter a valid number.';
      return;
    }
  
    let convertedTemperature = 0;
    let targetUnit = '';
  
    // Conversion logic based on the selected input unit
    switch (unit) {
      case 'Celsius':
        convertedTemperature = `${(temperature * 9/5 + 32).toFixed(2)} °F (Fahrenheit), ${(temperature + 273.15).toFixed(2)} K (Kelvin)`;
        break;
      case 'Fahrenheit':
        convertedTemperature = `${((temperature - 32) * 5/9).toFixed(2)} °C (Celsius), ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)} K (Kelvin)`;
        break;
      case 'Kelvin':
        convertedTemperature = `${(temperature - 273.15).toFixed(2)} °C (Celsius), ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} °F (Fahrenheit)`;
        break;
      default:
        convertedTemperature = 'Please select a valid unit.';
    }
  
    // Display the result
    resultDiv.innerHTML = `Converted Temperature: ${convertedTemperature}`;
  });
  