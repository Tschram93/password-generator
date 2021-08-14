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
