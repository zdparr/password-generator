// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate password
function generatePassword() {
  // Required variables
  const passwordLength  = prompt("How many characters do you want?");
  const upperCaseReq    = confirm("Do you want to use uppercase?");
  const numberReq       = confirm("Do you want to use numbers?");
  const specialCharReq  = confirm("Do you want to use special characters?");
  let returnedPassword  = "";
  

  // Arrays of data
  const lowerCaseChars  = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars     = "0123456789";
  const specialChars    = "!@#$%^&*";

  // Build correct array based on desired requirements
  let charSet = lowerCaseChars;
  if (upperCaseReq) {
  charSet = charSet.concat(upperCaseChars);
  } 
  if (numberReq) {
    charSet = charSet.concat(numberChars);
  }
  if (specialCharReq) {
    charSet = charSet.concat(specialChars);
  }
  console.log(charSet);

  // Generate password
  for (let i = 0; i < passwordLength; i++) {
    
    charSet = charSet.toString();
    character = charSet.charAt(Math.floor(Math.random() * charSet.length));
    returnedPassword = returnedPassword.concat(character);  
  }
  return returnedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
