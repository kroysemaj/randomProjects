var fahrenheittemp = 212;


function convertToCelsius(){ // not defining an argurment for this method
    var celsiustemp = 5/9 * (fahrenheittemp - 32);
    // only reason this works is because the var is declared outside in the global scope
    console.log("Mariah's JS - The temperature in Celsius is: " + celsiustemp);
}

convertToCelsius(); // not calling the function with an argument