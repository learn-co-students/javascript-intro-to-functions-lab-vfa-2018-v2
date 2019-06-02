// 1. shout(string) receives one argument and returns it in all caps
function shout(string) {
  return string.toUpperCase()
}

// 2. whisper(string) receives one argument and returns it in all lowercase
function whisper(string) {
  return string.toLowerCase()
}

// 3. logShout(string) calls console.log() its one argument in all caps
function logShout(string) {
  return console.log(string.toUpperCase())
}

// 4. logWhisper(string) calls console.log() its one argument in all lowercase
function logWhisper(string) {
  return console.log(whisper(string))
}

// 5. sayHiToGrandma(string) (a) returns "I can\'t hear you!" if `string` is lowercase (b) returns "YES INDEED!" if `string` is uppercase' (c) returns "I love you, too." if `string` is "I love you, Grandma.


function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    var text ="I can't hear you!";
  }
  else if (string.toUpperCase() === string) {
    text ="YES INDEED!";
  }
  else {
    text ="I love you, too.";
  }
  return text
}
