function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  return console.log('HELLO')
}

function logWhisper(string) {
  return console.log('hello')
}

function logLove(string) {
  return console.log('I love you, Grandma.')
}

var uppercase = "HELLO!"
 
var lowercase = 'hello!'
 
var greeting1 = "I can't hear you"
var greeting2 = "YES INDEED!"
var greeting3 = "I love you, too."

function sayHiToGrandma(string) {
  if (uppercase.toUpperCase() === uppercase) { // true 
    return greeting2
  if (lowercase.toLowerCase() === lowercase) { // true
    return greeting1
  if (string.logLove) {
    return greeting3
  }
}
}
}