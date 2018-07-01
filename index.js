function shout (string) {
  return string.toUpperCase()
}

function whisper (string) {
  return string.toLowerCase()
}

function logShout (string) {
 
console.log("HELLO")
  
}

function logWhisper (string) {
 
console.log("hello")

}

function sayHiToGrandma(string) {
  
var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase // true
var lowercase = 'hello!'
lowercase.toLowerCase() === lowercase // true
var mixedCase = 'Hi there!'
mixedCase.toLowerCase() === mixedCase // false
mixedCase.toUpperCase() === mixedCase
 
  if (lowercase) {
    return "I can't hear you";
  }
  
  if (uppercase) {
    return "YES INDEED";
  }
  
  if (mixedCase) {
    return "I love you too";
  }
}





