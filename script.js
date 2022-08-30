// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//variables for password content
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numbers = ["0123456789"]
var special =["!@#$%^&*()=+<>?"]
var pw =""

function generatePassword() {
  var criteria = "";
  window.alert("Please let us know what to include/exclude from your password by answering the following questions:");
//prompt for password length
    var charLength = window.prompt("How many characters should your password be? (8-128 characters)");
      if (charLength < 8 || charLength > 128) {
        alert("Your passord cannot be shorter than 8 characters or longer than 128 characters. Please try again.");
      generatePassword();

      }  else{
        charLength = charLength
        console.log(charLength)
//prompts for password content
          var upper = confirm("Would you like your password to contain uppsercase letters?");
            if(upper === true) {
              criteria += upperCase
            };

          var lower = confirm("Would you like your password to contain lowercase letters?");
            if(lower === true) {
              criteria += lowerCase
            };

          var confirmNumbers = confirm("Would you like your password to contain numbers?");
            if(confirmNumbers === true) {
              criteria += numbers
            };

          var confirmSpecial = confirm("Would you like your password to contain special characters?");
            if(confirmSpecial === true) {
              criteria += special
            };
            console.log(criteria)

          if (!upper && !lower && !confirmNumbers && !confirmSpecial) {
            alert("You must confirm at least one password content parameter.");
            generatePassword();
          } else {
            for (var i = 0; i < charLength; i++) {
              var randomPassword = Math.floor(Math.random() * criteria.length)
              pw = pw + criteria[randomPassword]
            };
          }
          console.log(randomPassword);
          console.log(pw)

        };    
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = pw;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
