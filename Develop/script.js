// Assignment Code //
document.querySelector("#generate").addEventListener("click", writePassword);




// Write password to the #password input //
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays //
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



// Varable's Declared //
var confirmLength = "";
var confirmSpecialChar;
var confirmNumChar;
var confirmLowerCase;
var confirmUpeerCase;



// Prompt for user to select how many characters that are going to use //

// Loop when outside parameters 8-128 characters //

// Alert user chosen charcter amount //

// Password Parameters //

// Loop if password is outside parameters 8-128 //

// Assigned action to password parameters //

// Empty string will be filled according to for loop selecting random characters from array //

// Display password in the pass word input box //

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}