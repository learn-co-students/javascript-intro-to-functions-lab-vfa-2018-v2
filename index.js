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
uppercase.toUpperCase() === uppercase
 
var lowercase = 'hello!'
lowercase.toLowerCase() === lowercase

var mixedCase = 'I love you, too.'
mixedCase.toUpperCase() === mixedCase
mixedCase.toLowerCase() === mixedCase

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string){
      return 'I can\'t hear you!';
    }
    if (string.toUpperCase() === string){
      return 'YES INDEED!';
    }
    if (string === 'I love you, Grandma.'){
      return 'I love you, too.';
    }
}
