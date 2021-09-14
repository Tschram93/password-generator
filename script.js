const randomFunction = {
  lower: lowercaseRandom,
  upper: uppercaseRandom,
  number: numberRandom,
  special: specialRandom
};


// Add event listener to generate button


// Establishing variables for DOM Elements 
var uppercase = document.querySelector('.upper');
var lowercase = document.querySelector('.lower');
var special = document.querySelector('.spec');
var number = document.querySelector('.number');
var lengthEl = document.getElementById('charLength');
// password is the location where I want the output
var password = document.querySelector("#password");
var generateEl = document.getElementById("generate");

// Adding eventlistener to the generate password button
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  console.log(typeof length);
  const checkedUpper = uppercase.checked;
  const checkedLower = lowercase.checked;
  const checkedSpecial = special.checked;
  const checkedNumber = number.checked;
  password.innerText = generatePassword(checkedUpper, checkedLower, checkedNumber, checkedSpecial);
});

// Generate Password function
function generatePassword(lower, upper, number, special, length) {
  // filter out unchecked(false) types
  // loop over length for each type
  // add final password 
  let generatedPassword = '';

  const typesCount = lower + upper + number + special;
  console.log('typesCount: ', typesCount);
};

// I am using the character code numbers listed from https://www.w3schools.com/charsets/ref_html_ascii.asp

function uppercaseRandom() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// console.log(uppercaseRandom());

function lowercaseRandom() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// console.log(lowercaseRandom());

function numberRandom() {
  return String.fromCharCode(Math.floor(Math.random() *
    10) + 48);
}
// console.log(numberRandom());
function specialRandom() {
  const special = '!#$%&()*+,-./:;><=?@[]^_`~|{}';
  return special[Math.floor(Math.random() * special.length)]
}
// console.log(specialRandom());