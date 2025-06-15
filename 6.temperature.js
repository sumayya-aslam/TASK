let temperature = parseFloat(prompt("Enter the temperature value:"))
  let unit = prompt("Enter the unit of temperature (C or F):")
  let convertedTemperature;
  let convertedUnit;

  if (unit === "C") {
    convertedTemperature = (temperature * 9/5) + 32
    convertedUnit = "F"
  }
   else if (unit === "F") {
    convertedTemperature = (temperature - 32) * 5/9
    convertedUnit = "C"
  }
   else {
    console.log("Invalid unit entered.")
  }

  if (convertedTemperature !== undefined){
    console.log(`The temperature in ${convertedUnit} is ${convertedTemperature.toFixed(2)}`)
  }
