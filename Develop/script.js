// Assignment Code //
document.querySelector("#generate").addEventListener("click", writePassword);


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
function generatePassword() {
  var confirmLength = (prompt("Please choose how many characters you would like your password to contain?"));

// Loop when outside parameters 8-128 characters //
while(confirmLength <= 8 || confirmLength >= 129) {
  alert("Your password length must be between 8-128 characters long try again");
  var confirmLength = (prompt("Please choose how many characters you would like your password to contain?"));
}

  // Alert user chosen charcter amount //
  alert(`Your password will contain ${confirmLength} characters`);

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