let input = prompt("Enter a string: ")
let vowels = ['a', 'e', 'i', 'o', 'u']
for (let i = 0; i < input.length; i++) {
  let char = input[i].toLowerCase()

  if (vowels.includes(char)) {
    console.log(char + " is a vowel.")
  } 
  else if (char >= 'a' && char <= 'z') {
    console.log(char + " is a consonant.")
  }
}