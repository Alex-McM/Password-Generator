// Assignment Code //

var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays //

var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Varable's Declared //

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt for user to select how many characters that are going to use //

   function generatePassword() {
   var confirmLength = (prompt("Please choose how many characters you would like your password to contain?"));

   // Loop when outside parameters 8-128 characters //
  
   while(confirmLength <= 8 || confirmLength >= 128) {
      alert("Your password length must be between 8-128 characters long try again");
      var confirmLength = (prompt("Please choose how many characters you would like your password to contain?"));
      } 

   // Alert user chosen charcter amount //
   
   alert(`Your password will contain ${confirmLength} characters`);

    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include Special Characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include Numerical Characters");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include Lowercase Characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include Uppercase Characters");
     
   // Loop when outside parameters 8-128 characters //
      
     while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include Special Characters");
        var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include Numerical Characters");    
        var confirmLowerCase = confirm("Click OK to confirm if you would like to include Lowercase Characters");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to include Uppercase Characters");   
    } 

      // Assigned action to password parameters //
      
      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      // Empty string will be filled according to for loop selecting random characters from array //
      
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Generate Password to input //

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}