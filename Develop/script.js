// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
// const incorrectNumber = function (){
//   document.getElementById('passLength').innerHTML = ""
//   document.getElementById('form').innerHTML = `
//   <br>
//   <p class = "incorrect"> Invalid input! Please enter a number between 8-128. </p>`
//   let mod = document.getElementById('exampleModal')
//   mod.setAttribute('exampleModal', 'data-backdrop="static"')
// }
const generatePassword = function (){
  let upperCheck = document.getElementById('upper').checked
  let lowerCheck = document.getElementById('lower').checked
  let numericCheck = document.getElementById('numeric').checked
  let specialCheck = document.getElementById('special').checked
  let passLength = document.getElementById('passLength').value

  while (!Number.isInteger(parseInt(passLength, 10)) || parseInt(passLength, 10) < 8 || parseInt(passLength, 10) > 128) {
    alert('Invalid Input! Please enter a number 8-128')
    let mod = document.getElementById('form')
    mod.reset()
  //   document.getElementById('form').innerHTML = `
  // <br>
  // <p class = "incorrect"> Invalid input! Please enter a number between 8-128. </p>`
  //   let mod = document.getElementById('exampleModal')
  //   mod.setAttribute('exampleModal', 'data-backdrop="static"')
  }
  console.log(upperCheck)
  console.log(lowerCheck)
  console.log(numericCheck)
  console.log(specialCheck)
  console.log(passLength)

  let upperString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let lowerString = 'abcdefghijklmnopqrstuvwxyz'
  let numericString = '0123456789'
  let specialString = `!"@#$%&^*()'+-,./:;<=>?[]\`|~\\`
  let passString=''
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
  for(let i = 0; i<passLength; i++){
    password +=passString.charAt(Math.floor(Math.random()*passString.length))
  }

  return password
}
function writePassword() {
  //this line selects the element with the password ID
  var password = generatePassword();
  var passwordText = document.querySelector("#password")

  // This line is the password displayed in the box after the button is clicked
  // passwordText.value = password;
  passwordText.value = password
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", writePassword)