// 1. Check if Number positive
let num1=5

if (num1 > 0) {
 console.log("1. Number is positive")
} else {
  console.log("1. Number is not positive")
}

// 2. Check if a person is eligible to vote (age >= 18)
let age = 20
if (age >= 18) {
  console.log("2. Person is eligible to vote")
} else {
  console.log("2. Person is not eligible to vote")
}

// 3. Check if a number is odd or even
let num2 = 7
if (num2 % 2 === 0) {
  console.log("3. Number is even")
} else {
  console.log("3. Number is odd")
}

// 4. Calculate the difference between two numbers (always positive)
let a = 15, b = 25
let difference = Math.abs(a - b)
console.log(`4. Difference: ${difference}`)

// 5. Calculate the product of two numbers
let num3 = 4, num4 = 6
let product = num3 * num4
console.log(`5. Product: ${product}`)

// 6. Calculate area of rectangle (length × width)
let length = 10, width = 5
let area = length * width
console.log(`6. Area of Rectangle: ${area}`)

// 7. Convert meters to centimeters (1m = 100cm)
let meters = 3;
let centimeters = meters * 100
console.log(`7. ${meters} meter(s) is ${centimeters} centimeter(s)`)

// 8. Calculate average of three numbers
let x = 10, y = 20, z = 30
let average = (x + y + z) / 3
console.log(`8. Average: ${average}`)

// 9. Calculate perimeter of square (4a)
let side = 6;
let perimeter = 4 * side
console.log(`9. Perimeter of Square: ${perimeter}`)

// 10. Check if student passed (marks >= 40) or failed
let marks = 35
if (marks >= 40) {
  console.log("10. Student passed")
} else {
  console.log("10. Student failed")
}


