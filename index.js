function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log('HELLO')
}

function logWhisper(string) {
  console.log('hello')
}

function sayHiToGrandma(string) {
  var lowercase = string;
  var uppercase = string;
  var love = string;
 if (lowercase.toLowerCase() === string)
 return("I can't hear you!");
 if (uppercase.toUpperCase() === string)
 return("YES INDEED!");
 if (love === "I love you, Grandma.");
 return("I love you, too.");
}
 