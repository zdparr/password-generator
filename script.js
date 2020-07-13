// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate password
function generatePassword() {
  let length = prompt("How many characters do you want?");
  let lowerCase = confirm("Do you want lower case characters?");
  let upperCase = confirm("Do you want upper case characters?");
  let specialCharacters = confirm("Do you want special characters?");
  console.log(length);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
