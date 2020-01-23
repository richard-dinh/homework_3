// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(`GenerateBtn is ${generateBtn}`)
// Write password to the #password input

const generatePassword = function (){
  let passLength = prompt('How long do you want the password to be (8 - 128 characters)?')
  //Keeps running into an integer is passed through and is between 8 and 128
  while (!Number.isInteger(parseInt(passLength, 10)) || parseInt(passLength, 10) < 8 || parseInt(passLength, 10) > 128) {
    passLength = prompt('Invalid Input! Enter a number from 8-128.')
  }
  console.log(passLength)
  let specialCharacters = prompt('What type of characters do you want (uppercase, lowercase, numeric, or special characters)?')

  //loop to ensure right character is entered
  while (specialCharacters !== 'uppercase' && specialCharacters !== 'lowercase' && specialCharacters !== 'numeric' && specialCharacters !== 'special characters') {
    specialCharacters = prompt('Invalid Input! Please enter either uppercase, lowercase, numeric, or special character.')
  }
  //set passwrod to empty
  let password = ''
  if (specialCharacters === 'uppercase') {
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (let i = 0; i < passLength; i++) {
    password += upper.charAt(Math.floor(Math.random() * upper.length))
  }
}
  else if (specialCharacters === 'lowercase') {
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < passLength; i++) {
      password += lower.charAt(Math.floor(Math.random() * lower.length))
    }
  }
  else if (specialCharacters === 'numeric') {
    let num = '0123456789'
    for (let i = 0; i < passLength; i++) {
      password += num.charAt(Math.floor(Math.random() * num.length))
    }
  }
  else if (specialCharacters === 'special characters') {
    let special = `!"@#$%&^*()'+-,./:;<=>?[]\`|~\\`
    for (let i = 0; i < passLength; i++) {
      password += special.charAt(Math.floor(Math.random() * special.length))
    }
  }
  return password

}
function writePassword() {
  //this line selects the element with the password ID
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password")

  // This line is the password displayed in the box after the button is clicked
  // passwordText.value = password;
  passwordText.value = password

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", writePassword)