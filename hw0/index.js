//Start of the program
main:
while (true) {
    //Asks user what currency they want to convert
    let firstCurrencyName = prompt("What currency do you want to convert?( USD, UAH, EUR, JPY, GBP only )").toUpperCase();
    whatAmount:
    while (firstCurrencyName === "USD" || firstCurrencyName === "UAH" || firstCurrencyName === "EUR" || firstCurrencyName === "JPY" || firstCurrencyName === "GBP") {
        //Asks user the amount they want to convert
        let AmountToConvert = prompt("What amount you want to convert?( number only )"); 
        while (AmountToConvert > 0) {
            //Asks user what currency they want to convert
            let secondCurrencyName = prompt("To what currency do you want to convert to? ( USD, UAH, EUR, JPY, GBP only )").toUpperCase();
            while (secondCurrencyName === "USD" || secondCurrencyName === "UAH" || secondCurrencyName === "EUR" || secondCurrencyName === "JPY" || secondCurrencyName === "GBP") {
                 //Converts currency based on user input
                if(firstCurrencyName === "USD"){
                    if (secondCurrencyName === "UAH") {
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 26.30} ${secondCurrencyName}`)
                    } else if(secondCurrencyName === "JPY"){
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 113.83} ${secondCurrencyName}`)
                    } else if(secondCurrencyName === "EUR"){
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 0.86} ${secondCurrencyName}`)
                    } else if(secondCurrencyName === "GBP"){
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 0.73} ${secondCurrencyName}`)
                    }else if(secondCurrencyName === "USD"){
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 1} ${secondCurrencyName}`)
                    }
                } else if(firstCurrencyName === "JPY"){
                    if (secondCurrencyName === "UAH") {
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 0.23} ${secondCurrencyName}`)
                    } else if(secondCurrencyName === "USD"){
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 0.0088} ${secondCurrencyName}`)
                    } else if(secondCurrencyName === "EUR"){
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 0.0076} ${secondCurrencyName}`)
                    } else if(secondCurrencyName === "GBP"){
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 0.0064} ${secondCurrencyName}`)
                    }else if(secondCurrencyName === "JPY"){
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 1} ${secondCurrencyName}`)
                    }
                } else if(firstCurrencyName === "EUR"){
                    if (secondCurrencyName === "UAH") {
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 30.46} ${secondCurrencyName}`)
                    } else if(secondCurrencyName === "JPY"){
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 131.86} ${secondCurrencyName}`)
                    } else if(secondCurrencyName === "USD"){
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 1.16} ${secondCurrencyName}`)
                    } else if(secondCurrencyName === "GBP"){
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 0.85} ${secondCurrencyName}`)
                    }else if(secondCurrencyName === "EUR"){
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 1} ${secondCurrencyName}`)
                    }
                } else if(firstCurrencyName === "UAH"){
                    if (secondCurrencyName === "USD") {
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 0.038} ${secondCurrencyName}`)
                    } else if(secondCurrencyName === "JPY"){
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 4.35} ${secondCurrencyName}`)
                    } else if(secondCurrencyName === "EUR"){
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 0.033} ${secondCurrencyName}`)
                    } else if(secondCurrencyName === "GBP"){
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 0.028} ${secondCurrencyName}`)
                    }else if(secondCurrencyName === "UAH"){
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 1} ${secondCurrencyName}`)
                    }
                } else if(firstCurrencyName === "GBP"){
                    if (secondCurrencyName === "UAH") {
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 35.83} ${secondCurrencyName}`)
                    } else if(secondCurrencyName === "JPY"){
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 155.77} ${secondCurrencyName}`)
                    } else if(secondCurrencyName === "EUR"){
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 1.18} ${secondCurrencyName}`)
                    } else if(secondCurrencyName === "USD"){
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 1.37} ${secondCurrencyName}`)
                    }else if(secondCurrencyName === "GBP"){
                        alert(`${AmountToConvert} ${firstCurrencyName} - ${AmountToConvert * 1} ${secondCurrencyName}`)
                    }
                }
                //Asks user if they want to convert again
                const wantToProcced = confirm("Do you want to convert again?")
                if (!wantToProcced) {
                    //Exits the program
                    break main
                }else{
                    //Starts procedure at the start
                    break whatAmount
                }
            }
        }
    }
}
    
    
