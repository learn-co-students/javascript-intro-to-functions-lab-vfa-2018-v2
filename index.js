var shout = function(word) {
  return word.toUpperCase();
}

var whisper = function(word) {
  return word.toLowerCase();
}

var logShout = function(word) {
  console.log(word.toUpperCase());
}

var logWhisper = function(word) {
  console.log(word.toLowerCase());
}

function sayHiToGrandma(string)  {
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
  if (string.toUpperCase() === string) {
    return "YES INDEED!";
  }
  if (string.toLowerCase() === string) {
    return "I can\'t hear you!";
  }
}