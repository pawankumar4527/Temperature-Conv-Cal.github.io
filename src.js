const inputTemp = document.getElementById("input-temp");
const selectUnit = document.getElementById("select-unit");
const convertButton = document.getElementById("convert-button");
const output = document.getElementById("output");

convertButton.addEventListener("click", function () {
    const inputValue = parseFloat(inputTemp.value);
    let outputValue;
    if (selectUnit.value === "celsius") {
        outputValue = (inputValue * 9 / 5) + 32;
        outputValue = outputValue.toFixed(2) + "°F";
    } else if (selectUnit.value === "fahrenheit") {
        outputValue = (inputValue - 32) * 5 / 9;
        outputValue = outputValue.toFixed(2) + "°C";
    } else {
        outputValue = inputValue + 273.15;
        outputValue = outputValue.toFixed(2) + "K";
    }
    output.textContent = outputValue;
});
