// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input

// Global variables

const inputCheck = function (){
  let passLength = document.getElementById('passLength').value
  let mod = document.getElementById('generate')
  let isUpperCheck = document.getElementById('upper').checked
  let isLowerCheck = document.getElementById('lower').checked
  let isNumericCheck = document.getElementById('numeric').checked
  let isSpecialCheck = document.getElementById('special').checked
  let isValidNum= Number.isInteger(parseInt(passLength, 10)) && parseInt(passLength, 10) >= 8 && parseInt(passLength, 10) <= 128
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
  else{
    //line to clear error message so they don't keep stacking when user keeps entering wrong message
    document.getElementById('formCheck').innerHTML = ``
  }
  //check for any boxes ticked
  if(!isChecked){
    mod.setAttribute('data-dismiss', '')
    document.getElementById('boxCheck').innerHTML =`
    <br><p class = 'incorrect'> Invalid input! Please check at least one box</p>`
  }
  else{
    document.getElementById('boxCheck').innerHTML = ``
  }
   if(isChecked && isValidNum) {
    mod.setAttribute('data-dismiss', 'modal')
  }
}

const generatePassword = function (){
  let upperCheck = document.getElementById('upper').checked
  let lowerCheck = document.getElementById('lower').checked
  let numericCheck = document.getElementById('numeric').checked
  let specialCheck = document.getElementById('special').checked
  let passLength = Math.floor(document.getElementById('passLength').value)

  console.log(upperCheck)
  console.log(lowerCheck)
  console.log(numericCheck)
  console.log(specialCheck)
  console.log(passLength)


// Strings for random password generator
  let upperString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let lowerString = 'abcdefghijklmnopqrstuvwxyz'
  let numericString = '0123456789'
  let specialString = `!"@#$%&^*()'+-,./:;<=>?[]\`|~\\`
  let passString=''
  //Concats string to passString based user criteria
  if(upperCheck){
    passString = passString.concat(upperString)
  }
  if(lowerCheck){
    passString = passString.concat(lowerString)
  }
  if(numericCheck){
    passString = passString.concat(numericString)
  }
  if(specialCheck){
    passString = passString.concat(specialString)
  }
  console.log(passString)
  let password = ''

  // for loop to iterate through pass string and generate random password based on user specify length
  for(let i = 0; i<passLength; i++){
    password +=passString.charAt(Math.floor(Math.random()*passString.length))
  }
  
  return password
}
function writePassword() {
  //this line selects the element with the password ID
  inputCheck()
  var password = generatePassword()
  var passwordText = document.querySelector("#password")

  // This line is the password displayed in the box after the button is clicked
  // passwordText.value = password;
  passwordText.value = password
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", writePassword)