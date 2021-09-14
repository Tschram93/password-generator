//This is my third attempt at this assignment. The last one went horribly, horribly wrong; I will attach my original code at the bottom of this one for you to judge.
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button


//Calling the checkboxes 
var uppercase = document.querySelector('.upper');

var lowercase = document.querySelector('.lower');
var special = document.querySelector('.spec');
var number = document.querySelector('.number');
var password = document.querySelector("#password");
var btn = document.querySelector("#generate");
// console.log(passwordEl)
// I am using the character code numbers listed from https://www.w3schools.com/charsets/ref_html_ascii.asp
const characters = {
  uppercase: String.fromCharCode(Math.floor(Math.random() * 26) + 65),
  lowercase: String.fromCharCode(Math.floor(Math.random() * 26) + 97),
  number: String.fromCharCode(Math.floor(Math.random() *
    10) + 48),
  special: '!#$%&()*+,-./:;><=?@[]^_`~|{}'
}

//how many characters

// generateBtn.addEventListener('change', () => {

//   if (uppercaseEl.change) {} else {}
//   if (specialEl.change) {} else {}
//   if (numberEl.change) {} else {}
//   // console.log(hasLower, hasUpper, hasNumber, hasSpecial);
//   passwordEl.textContent = generatePassword(
//     hasLower,
//     hasUpper,
//     hasNumber,
//     hasSpecial);

// });
// Write password to the #password input
function writePassword() {
  var passwordSelection = "";

  // var length = prompt("How many characters would you like your password to be? Pick between 6-12.")
}
// console.log(writePassword)

function check(uppercaseEl) {
  document.uppercaseEl.checked = true;
}

function uncheck(uppercaseEl) {
  document.uppercaseEl.checked = false;
}

// lowercase
function check(lowercaseEl) {
  document.lowercaseEl.checked = true;
}

function uncheck(lowercaseEl) {
  document.lowercaseEl.checked = false;
}
// special
function check(specialEl) {
  document.specialEl.checked = true;
}

function uncheck(specialEl) {
  document.specialEl.checked = false;
}
// number
function numcheck(numberEl) {
  document.numberEl.checked = true;
}

function numuncheck(numberEl) {
  document.numberEl.checked = false;
}
console.log(numcheck());
console.log(numuncheck());

for (let i = 0; i < length; i++) {
  passwordFinal += passwordSelection[Math.floor(Math.random() * passwordSelection.length)]
}

var passwordFinal = ""
document.querySelector("#password").innerText = passwordFinal;
// }
// console.log(writePassword);