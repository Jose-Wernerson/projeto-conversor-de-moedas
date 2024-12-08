const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectConvert = document.querySelector(".currency-select-convert")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.2
    const euroToday = 6.2
    const bitcoinToday = 617620
    const libraToDay = 7.7
    const realToDay = 1
    
    const convertedValue = inputCurrencyValue /dolarToday

    currencyValueConverted.innerHTML= new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format(convertedValue)
    

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToDay)
    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToDay)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    const currencyNameConvert = document.getElementById("currency-name-convert")
    const currencyImgToConvert = document.querySelector(".currency-img-to-convert")

    if (currencySelectConvert.value == "idólar") {
        currencyNameConvert.innerHTML = "Dólar americano"
        currencyImgToConvert.src = "./img/dolar.png"
    }
    if (currencySelectConvert.value == "ieuro") {
        currencyNameConvert.innerHTML = "Euro"
        currencyImgToConvert.src = "./img/euro.png"
    }
    if (currencySelectConvert.value == "ilibra") {
        currencyNameConvert.innerHTML = "Libra"
        currencyImgToConvert.src = "./img/libra.png"
    }
    if (currencySelectConvert.value == "ireal") {
        currencyNameConvert.innerHTML = "Real"
        currencyImgToConvert.src = "./img/real.png"
    }
    if (currencySelectConvert.value == "ibitcoin") {
        currencyNameConvert.innerHTML = "Bitcoin"
        currencyImgToConvert.src = "./img/bitcoin.png"
    }

    if (currencySelect.value == "dólar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./img/dolar.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./img/euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./img/libra.png"
    }
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./img/real.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./img/bitcoin.png"
    }

    convertValues()
}

currencySelectConvert.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

