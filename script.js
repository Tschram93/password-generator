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
// var btn = document.querySelector("#generate");
// console.log(passwordEl)
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
console.log(specialRandom());