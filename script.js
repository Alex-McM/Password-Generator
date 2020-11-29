// Assignment Code //

var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);








// Arrays //
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



// Varable's Declared //
var confirmLength = "";
var confirmSpecialChar;
var confirmNumChar;
var confirmLowerCase;
var confirmUpperCase;



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

  // Password Parameters //
  var confirmSpecialChar = confirm("Click OK to confirm if you would like to include Special Characters");
  var confirmNumChar = confirm("Click OK to confirm if you would like to include Numerical Characters");
  var confirmLowerCase = confirm("Click OK to confirm if you would like to include Lowercase Characters");
  var confirmUpperCase = confirm("Click OK to confirm if you would like to include Uppercase Characters");


  // Loop if password is outside parameters 8-128 //
  while(confirmLowerCase === false && confirmUpperCase === false && confirmNumChar === false && confirmSpecialChar === false) {
    alert("Please chose at least one password parameter");
    var confirmSpecialChar = confirm("Click OK to confirm if you would like to include Special Characters");
    var confirmNumChar = confirm("Click OK to confirm if you would like to include Numerical Characters");
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include Lowercase Characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include Uppercase Characters");

  }
  // Assigned action to password parameters //
 
  var passwordCharacters = []
      
  if (confirmSpecialChar) {
    passwordCharacters = passwordCharacters.concat(specialChar)
  }

  if (confirmNumChar) {
    passwordCharacters = passwordCharacters.concat(number)
  }
    
  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(alphaLower)
  }

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(alphaUpper)
  
  }


  // Empty string will be filled according to for loop selecting random characters from array /
    
  for(var i = 0; i<passLength; i++) {
    ​
        var charIndex =  Math.floor(Math.random()*chars.length);
        generatedPass += passwordCharacters[charIndex];
    ​
        console.log('charIndex: ' + charIndex);
        console.log('generatedPass: ' +  generatedPass);
    }
    

   } 


// Generate Password to input //


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


