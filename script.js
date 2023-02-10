// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  // console.log("button click")
  // 1. Ask user for pw criteria
  var lengthChoice = window.prompt("Please choose a password length. It must be a number from 8 to 128.");
  var upperCase = window.prompt("Would you like to include uppercase letters? Please type 'YES' or 'NO'");
  var lowerCase = window.prompt("Would you like to include lowercase letters? Please type 'YES' or 'NO'");
  var specialCharacters = window.prompt("Would you like to include special characters? Please type 'YES' or 'NO'");
  var numbers = window.prompt("Would you like to include numbers? Please type 'YES' or 'NO'");
  // If user doesn't follow the length criteria or opts out
  if ((lengthChoice >= 8) && (lengthChoice <= 128)) {
      upperCase;
      } else {
        return;}

  if ((upperCase == YES) || (upperCase == NO) || (upperCase == yes) || (upperCase == no)) {
    function upperCaseString () {
      var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      return upperAlphabet[Math.floor(Math.random() * lengthChoice.length)];
    }} else {
        return;}

  if ((lowerCase == YES) || (lowerCase == NO) || (lowerCase == yes) || (lowerCase == no)) {
    function lowerCaseString () {
      var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
      return lowerAlphabet[Math.floor(Math.random() * lengthChoice.length)];
    }} else {
        return;}
       
  if ((specialCharacters == YES) || (specialCharacters == NO) || (specialCharacters == yes) || (specialCharacters == no)) {
    function specialCharacterString () {
      var specialString = "!$%&'()*+,-./:;<=>?@[^_`{|}~";
      return specialString [Math.floor(Math.random() * lengthChoice.length)];
    }} else {
        return;}
  
  if ((numbers == YES) || (numbers == NO) || (numbers == yes) || (numbers == no)) {
    function numberString () {
      var numberString = "0123456789";
      return numberString [Math.floor(Math.random() * lengthChoice.length)];
    }} else {
        return;}
 }


//   for (let i = 0; i = lengthChoice.length; i++) {
//     lowerCaseString()+upperCaseString()+specialCharacterString()+numberString();
//   }

  

//   // else if (length < 8) && (length < 128) {

//   // }
//   // } 
//   //  a between 8 and 128 characters
//   //  b. upper, lower, special, numbers?
//   // 2. Validate input
//   // 3. Generate pw



//   // 4. Display pw

//   return "Generated Password"
// }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// make generatePassword function