// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // questions for user
  var lengthChoice = prompt("Please choose a password length. It must be a number from 8 to 128.");
  while ((lengthChoice < 8) || (lengthChoice > 128) || (isNaN(lengthChoice)=== true)) {
      alert("Character length must be a number from 8 to 128");
      lengthChoice = prompt("Please choose a password length. It must be a number from 8 to 128.")
      } 
  var upperCase = confirm("Would you like to include uppercase letters?");
  var lowerCase = confirm("Would you like to include lowercase letters?");
  var specialCharacters = confirm("Would you like to include special characters?");
  var numbers = confirm("Would you like to include numbers?");

// variables to hold character choices
var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
var specialString = "!$%&'()*+,-./:;<=>?@[^_`{|}~";
var numberString = "0123456789";
var charBank = ""
var userPassword = ""

// if statements to hold character info
  if (upperCase === true) {
    charBank = charBank.concat(upperAlphabet)
  }

  if (lowerCase === true) {
    charBank = charBank.concat(lowerAlphabet)
  }

  if (specialCharacters === true) {
    charBank = charBank.concat(specialString)
  }

  if (numbers === true) {
    charBank = charBank.concat(numberString)
  }

  // function that will randomize bank
  function randomizer(max) {
    return[Math.floor(Math.random()*max)]
  }

  // loop over character bank and return to user
  for (var i = 0; i < lengthChoice; i++) {
    userPassword = userPassword.concat(charBank.charAt(randomizer(charBank.length-1)))
  }
  return userPassword;

 }


//   return "Generated Password"
// }
// Write password to the #password input

// Add event listener to generate button



// make generatePassword function