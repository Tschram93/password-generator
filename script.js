//This is my third attempt at this assignment. The last one went horribly, horribly wrong; I will attach my original code at the bottom of this one for you to judge.
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);

//Calling the checkboxes 
var uppercaseEl = document.getElementById('.upper');
var lowercaseEl = document.getElementById('.lower');
var specialEl   = document.getElementById('.spec');
var numberEl    = document.getElementById('.number')
var passwordEl  = document.getElementById("password")

// I am using the character code numbers listed from https://www.w3schools.com/charsets/ref_html_ascii.asp
    const characters = {
  uppercase : String.fromCharCode(Math.floor(Math.random() * 26) + 65),
  lowercase : String.fromCharCode(Math.floor(Math.random() * 26) + 97),
    number : String.fromCharCode(Math.floor(Math.random()
  * 10) + 48),  
    special : '!#$%&()*+,-./:;><=?@[]^_`~|{}'
    }

  //how many characters

  // generateBtn.addEventListener('click', () => { 

  //   const hasUpper   = uppercaseEl.checked;
  //   const hasLower   = lowercaseEl.checked;
  //   const hasSpecial = specialEl.checked;
  //   const hasNumber  = numberEl.checked;
  // // console.log(hasLower, hasUpper, hasNumber, hasSpecial);
  // passwordEl.innerHTML = generatePassword(
  //   hasLower,
  //   hasUpper,
  //   hasNumber,
  //   hasSpecial);
    
  // }); 
// Write password to the #password input
function writePassword() {
    var passwordSelection = "";

    var length = prompt("How many characters would you like your password to be? Pick between 6-12.")
//if boxes are checked
//Lower:
function lower(){
if (lowercaseEl.checked) {
passwordSelection += characters.lower
}};
// console.log(lower)
//Upper:
function upper(){ 
if (uppercaseEl.checked) {
passwordSelection += characters.upper
}};
// console.log(upper)
//Numbers:

function numbers(){
if (numberEl.checked) {
    passwordSelection += characters.numbers
}}
// console.log(numbers)
//ask special characters
function special(){
if (specialEl.checked) {
    passwordSelection += characters.special
}};
// console.log(special)

for (let i=0; i < length; i++) {
  passwordFinal += passwordSelection[Math.floor(Math.random() * passwordSelection.length)]
}

var passwordFinal = ""
document.getElementById("password").innerText = passwordFinal;

}



//This is my third attempt at this assignment.
// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password       = genPass();
//   var selectPassword = '';
//   var passwordText   = document.querySelector("#password");

//   passwordText.value = password;
  
// }

//   //DOM Elements
//   // var generateEl = document.getElementById('generate');
//   var uppercaseEl = document.querySelector('.upper');
//   var lowercaseEl = document.querySelector('.lower');
//   var specialEl   = document.querySelector('.spec');
//   var numberEl    = document.querySelector('.number')
//   var passwordEl  = document.getElementById("password")
//   // var resultEl = document.getElementById('result');
//   // console.log(document.querySelector('.upper'))
//   var random = {
//     upper: uppercaseRandom,
//     lower: lowercaseRandom,
//     special: specialRandom,
//     number: numbersRandom,
//   };
//   var number = numbersRandom;

//   // Password Function
//   function genPass(upper, lower, special){
//     var generatedPass      = '';
//     const typesCount = upper + lower + special + number;

//     const arrayTypes = [{ upper }, { lower }, { special },  { number }].filter
//       (
//         item => Object.values(item)[0]
//       );
    
//     if(typesCount === 0){
//       return '';
//     }
    
//     for(var i = 0; i < length; i += typesCount) {
//       arrayTypes.forEach(type => {
//         const randomK = Object.keys(type)[0];

//         genPass += random[randomK]();
//       });
//     }
//     // console.log(generatePassword.slice(0,length))
//   }
//   var finalPassword = genPass(0,length);
// //Add Event Listener
// generateBtn.addEventListener('click', () => { 
  
//   const hasUpper   = uppercaseEl.checked;
//   const hasLower   = lowercaseEl.checked;
//   const hasSpecial = specialEl.checked;
//   const hasNumber  = numberEl.checked;
// // console.log(hasLower, hasUpper, hasNumber, hasSpecial);
// passwordEl.innerHTML = generatePassword(
//   hasLower,
//   hasUpper,
//   hasNumber,
//   hasSpecial);
  
// }); 
// // Add event listener to generate button
// //
// generateBtn.addEventListener("click", writePassword)


// // I am using the character code numbers listed from https://www.w3schools.com/charsets/ref_html_ascii.asp
// // 97-122/a-z
// function lowercaseRandom() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }
// // console.log(lowercaseRandom());
// //65-90/A-Z
// function uppercaseRandom() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);  
// }
// // console.log(uppercaseRandom());
// // 33-47
// function specialRandom() {
//   var specialCharacters = '!#$%&()*+,-./:;><=?@[]^_`~|{}';
//   return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
// }
// // console.log(specialRandom());
// // 48-57 / 0-9
// function numbersRandom() {
//   return String.fromCharCode(Math.floor(Math.random()
//   * 10) + 48);
// }
// console.log(String.fromCharCode(Math.floor(Math.random() * 10) + 48))
// // 

