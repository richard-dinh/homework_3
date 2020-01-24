// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
const inputCheck = function (){
  let passLength = document.getElementById('passLength').value
  let mod = document.getElementById('generate')
  let upperCheck = document.getElementById('upper').checked
  let lowerCheck = document.getElementById('lower').checked
  let numericCheck = document.getElementById('numeric').checked
  let specialCheck = document.getElementById('special').checked
  let isValidNum= Number.isInteger(parseInt(passLength, 10)) && parseInt(passLength, 10) >= 8 && parseInt(passLength, 10) <= 128
  // let temp1 = Number.isInteger(parseInt(passLength, 10))
  // let temp2 = parseInt(passLength,10) >= 8
  // let temp3 = parseInt(passLength, 10)<=128

  let isChecked = upperCheck || lowerCheck || numericCheck || specialCheck
  if (!isValidNum) {
    mod.setAttribute('data-dismiss', '')
    passLength = ""
    // let node = document.createElement('p')
    // node.className = 'incorrect'
    // let textnode = document.createTextNode('Invalid input! Enter a number between 8-128')
    // node.appendChild(textnode)
    // document.getElementById('formCheck').appendChild(node)
    document.getElementById('formCheck').innerHTML = `
    <br><p class = 'incorrect'> Invalid input! Please enter a number between 8-128)</p>`
  }
  else{
    document.getElementById('formCheck').innerHTML = ``
  }
  if(!isChecked){
    mod.setAttribute('data-dismiss', '')
    // let node = document.createElement('p')
    // node.className = 'incorrect'
    // let textnode = document.createTextNode('Invalid input! Please check a box')
    // node.appendChild(textnode)
    // document.getElementById('boxCheck').appendChild(node)
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

  // while (!Number.isInteger(parseInt(passLength, 10)) || parseInt(passLength, 10) < 8 || parseInt(passLength, 10) > 128) {
    
  //   let mod = document.getElementById('exampleModal')
  //   mod.setAttribute('data-backdrop', 'static')
  //   mod.setAttribute('data-keyboard', 'false')
  //   passLength = ""
  //   document.getElementById("formCheck").innerHTML = `
  // <br>
  // <p class = "incorrect"> Invalid input! Please enter a number between 8-128. </p>`
  // }
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