const temperature = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

convertBtn.addEventListener("click", function () {
    const value = parseFloat(temperature.value);

    if (temperature.value.trim() === "" || !Number.isFinite(value)) {
        result.textContent = "Please enter a valid temperature.";
        return;
    }

    const from = fromUnit.value;
    const to = toUnit.value;

    let celsius;

    // Convert input to Celsius first
    if (from === "celsius") {
        celsius = value;
    } else if (from === "fahrenheit") {
        celsius = (value - 32) * 5 / 9;
    } else {
        celsius = value - 273.15;
    }

    if (celsius < -273.15) {
        result.textContent = "Temperature cannot be below absolute zero.";
        return;
    }

    let converted;

    // Convert Celsius to selected unit
    if (to === "celsius") {
        converted = celsius;
    } else if (to === "fahrenheit") {
        converted = (celsius * 9 / 5) + 32;
    } else {
        converted = celsius + 273.15;
    }

    const symbols = {
        celsius: "°C",
        fahrenheit: "°F",
        kelvin: "K"
    };

    result.textContent =
        `${converted.toFixed(2)} ${symbols[to]}`;

});