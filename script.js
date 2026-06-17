let convertBtn =
    document.querySelector(".convert-btn");

let resetBtn =
    document.querySelector(".reset-btn");

let temperatureInput =
    document.getElementById("temperatureInput");

let fromUnit =
    document.getElementById("fromUnit");

let toUnit =
    document.getElementById("toUnit");

let resultNumber =
    document.querySelector(".result-number");

let resultText =
    document.querySelector(".result-text");

convertBtn.onclick = function () {

    let inputValue =
        temperatureInput.value;

    if (inputValue === "") {

        resultNumber.innerText =
            "00.0";

        resultText.innerText =
            "Please enter a value";

        resultText.style.color =
            "#d67b7b";

        return;
    }

    let value =
        Number(inputValue);

    let convertedValue =
        value;

    if (
        fromUnit.value === "celsius" &&
        toUnit.value === "fahrenheit"
    ) {

        convertedValue =
            (value * 9/5) + 32;

    }

    else if (
        fromUnit.value === "celsius" &&
        toUnit.value === "kelvin"
    ) {

        convertedValue =
            value + 273.15;

    }

    else if (
        fromUnit.value === "fahrenheit" &&
        toUnit.value === "celsius"
    ) {

        convertedValue =
            (value - 32) * 5/9;

    }

    else if (
        fromUnit.value === "fahrenheit" &&
        toUnit.value === "kelvin"
    ) {

        convertedValue =
            ((value - 32) * 5/9)
            + 273.15;

    }

    else if (
        fromUnit.value === "kelvin" &&
        toUnit.value === "celsius"
    ) {

        convertedValue =
            value - 273.15;

    }

    else if (
        fromUnit.value === "kelvin" &&
        toUnit.value === "fahrenheit"
    ) {

        convertedValue =
            ((value - 273.15)
            * 9/5) + 32;

    }

    resultNumber.innerText =
        convertedValue.toFixed(1);

    document.body.classList.remove(
        "cold-theme",
        "normal-theme",
        "hot-theme"
    );

    let temperatureInCelsius;

    if (toUnit.value === "celsius") {

        temperatureInCelsius =
            convertedValue;

    }

    else if (
        toUnit.value === "fahrenheit"
    ) {

        temperatureInCelsius =
            (convertedValue - 32)
            * 5/9;

    }

    else {

        temperatureInCelsius =
            convertedValue - 273.15;

    }

    if (
        temperatureInCelsius < 15
    ) {

        document.body.classList.add(
            "cold-theme"
        );

        resultText.innerText =
            "Cold Temperature";

        resultText.style.color =
            "#5b8db8";

    }

    else if (
        temperatureInCelsius >= 15 &&
        temperatureInCelsius <= 30
    ) {

        document.body.classList.add(
            "normal-theme"
        );

        resultText.innerText =
            "Normal Temperature";

        resultText.style.color =
            "#7da67d";

    }

    else {

        document.body.classList.add(
            "hot-theme"
        );

        resultText.innerText =
            "Hot Temperature";

        resultText.style.color =
            "#d67b7b";

    }

};

resetBtn.onclick = function () {

    temperatureInput.value = "";

    fromUnit.value =
        "celsius";

    toUnit.value =
        "fahrenheit";

    resultNumber.innerText =
        "00.0";

    resultText.innerText =
        "Normal Temperature";

    resultText.style.color =
        "#7da67d";

    document.body.classList.remove(
        "cold-theme",
        "hot-theme"
    );

    document.body.classList.add(
        "normal-theme"
    );

};
