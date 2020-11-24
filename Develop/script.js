// Assignment Code //
var generateBtn = document.querySelector("#generate");

// Write password to the #password input //
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays //


// Varable's Declared //

// Prompt for user to select how many characters that are going to use //

// Loop when outside parameters 8-128 characters //

// Alert user chosen charcter amount //

// Password Parameters //

// Loop if password is outside parameters 8-128 //

// Assigned action to password parameters //

// Empty string will be filled according to for loop selecting random characters from array //

// Display password in the pass word input box //