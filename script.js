// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min, max){
  if (!max){
  max = min
  min = 0
  }
 var mathRan = Math.random()
 return Math.floor(min * (1 - mathRan) + mathRan * max)
 }
 function collectRandom(list) {return list [randomInt(list.length)]}

function genPassword(){

 var userInput = window.prompt("How long would you like your password?")

 var passwordLength= parseInt(userInput)

 if (isNaN(passwordLength)){
  window.alert("Please choose a number.")
  return
 }

 if (passwordLength < 8){
  window.alert ("Length should be between 8 and 128 characters.")
  return
 }

 if (passwordLength > 128){
  window.alert ("Length should be between 8 and 128 characters.")
  return
 }

 // window.confirm brings a promt to the browser to select
 var userNumbers = window.confirm ("Do you want numbers in your password")
 var userSymbols = window.confirm ("Do you want symbols in your password")
 var userCaptial = window.confirm ("Do you want capital letters in your password")
 var userLowerCase = window.confirm ("Do you want lowercase letters in your password")

 var numberList = ["0","1","2","3","4","5","6","7","8","9"]
 var symbolList = ["!","@","#","$","%","^","&","*","~","+"]
 var lowerCaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
 var capitalList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
 
 var universalUser = []

 if (userNumbers === true) {
  universalUser.push(numberList)
 }
 if (userSymbols === true) {
  universalUser.push(symbolList)
 }
 if (userLowerCase === true) {
  universalUser.push(lowerCaseList)
 }
 if (userCaptial === true) {
  universalUser.push(capitalList)
 }

if (universalUser.length === 0){
window.alert('Please select at least one catagory')
}

 var genPassword = ""
  for (var i = 0; i < passwordLength; i++){
    var randomList = collectRandom(universalUser)
    var randomCharacter = collectRandom(randomList)
    genPassword += randomCharacter
  }
  return genPassword
}

// Write password to the #password input
function writePassword() {
  var password = genPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
