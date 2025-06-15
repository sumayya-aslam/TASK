  let basic = parseFloat(prompt("Enter Basic Salary:"))
  let da, hra, pf

  if (basic < 10000) {
    da = basic*(25/100)
    hra = basic*(30/100)
    pf = basic*(8/100)
  } else if (basic <= 20000) {
    da = basic*(20/100)
    hra = basic*(25/100)
    pf = basic*(6/100)
  } else if (basic <= 30000) {
    da = basic*(15/100)
    hra =basic*(20/100)
    pf = basic*(4/100)
  } else {
    da = basic*(10/100)
    hra = basic*(15/100)
    pf = basic*(2/100)
  }

  let netSalary = basic + da + hra - pf
  console.log("Basic Salary")
  console.log("DA")
  console.log("HRA")
  console.log("PF")
  console.log("Net Salary")