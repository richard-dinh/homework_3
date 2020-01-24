// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input

// Global variables

const inputCheck = function (isUpperCheck, isLowerCheck, isNumericCheck, isSpecialCheck, passLength) {
  let mod = document.getElementById('generate')
  let isValidNum = Number.isInteger(parseInt(passLength, 10)) && parseInt(passLength, 10) >= 8 && parseInt(passLength, 10) <= 128
  let isChecked = isUpperCheck || isLowerCheck || isNumericCheck || isSpecialCheck

  //Check to see if the user inputted a valid number
  if (!isValidNum) {
    //code to prevent the modal from dismissing
    mod.setAttribute('data-dismiss', '')
    //resetting the passLength string
    passLength = ""
    //outputting error message
    document.getElementById('formCheck').innerHTML = `
    <br><p class = 'incorrect'> Invalid input! Please enter a number between 8-128)</p>`
  }
  else {
    //line to clear error message so they don't keep stacking when user keeps entering wrong message
    document.getElementById('formCheck').innerHTML = ``
  }
  //check for any boxes ticked
  if (!isChecked) {
    mod.setAttribute('data-dismiss', '')
    document.getElementById('boxCheck').innerHTML = `
    <br><p class = 'incorrect'> Invalid input! Please check at least one box</p>`
  }
  else {
    document.getElementById('boxCheck').innerHTML = ``
  }
  if (isChecked && isValidNum) {
    mod.setAttribute('data-dismiss', 'modal')
  }
}

const generatePassword = function () {
  let isUpperCheck = document.getElementById('upper').checked
  let isLowerCheck = document.getElementById('lower').checked
  let isNumericCheck = document.getElementById('numeric').checked
  let isSpecialCheck = document.getElementById('special').checked
  let passLength = document.getElementById('passLength').value
  inputCheck(isUpperCheck, isLowerCheck, isNumericCheck, isSpecialCheck, passLength)
  //floor to keep the number an integer
  Math.floor(passLength)
  console.log(isUpperCheck)
  console.log(isLowerCheck)
  console.log(isNumericCheck)
  console.log(isSpecialCheck)
  console.log(passLength)


  // Strings for random password generator
  let upperString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let lowerString = 'abcdefghijklmnopqrstuvwxyz'
  let numericString = '0123456789'
  let specialString = `!"@#$%&^*()'+-,./:;<=>?[]\`|~\\`
  let passString = ''
  //Concats string to passString based user criteria
  if (isUpperCheck) {
    passString = passString.concat(upperString)
  }
  if (isLowerCheck) {
    passString = passString.concat(lowerString)
  }
  if (isNumericCheck) {
    passString = passString.concat(numericString)
  }
  if (isSpecialCheck) {
    passString = passString.concat(specialString)
  }
  console.log(passString)
  let password = ''

  // for loop to iterate through pass string and generate random password based on user specify length
  for (let i = 0; i < passLength; i++) {
    password += passString.charAt(Math.floor(Math.random() * passString.length))
  }

  return password
}
function writePassword() {
  //this line selects the element with the password ID
  var password = generatePassword()
  var passwordText = document.querySelector("#password")

  // This line is the password displayed in the box after the button is clicked
  passwordText.value = password
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", writePassword)