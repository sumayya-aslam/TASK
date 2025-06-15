 let num = 23
let Prime = true

if (num<=1){
    Prime = false
} 
else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            Prime = false
           
        }
    }
}

if (Prime) {
    console.log(num + " is a prime number")
} 
else {
    console.log(num + " is a composite number")
}