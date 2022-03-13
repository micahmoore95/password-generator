// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">","=", "+"]

function generatePassword() {
  var criteria = "";
  window.alert("Please let us know what to include/exclude from your password by answering the following questions:");
    var length = window.prompt("How many characters should your password be? (8-128 characters)");
      if (length < 8 || length > 128) {
        alert("Your passord cannot be shorter than 8 characters or longer than 128 characters. Please try again.");
      generatePassword();

      }  else{
        length = length
        console.log(length)
    
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
          };
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
