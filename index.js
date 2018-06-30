'Hello!'.toUpperCase()
function shout(string) {
  return string.toUpperCase ()
}

'HELLO'.toLowerCase();
function whisper(string) {
  return string.toLowerCase();
}

"hello".toUpperCase();
function logShout(string) {
  console.log(string.toUpperCase());
}

"HELLO".toLowerCase();
function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string===string.toLowerCase()){
    return "I can't hear you!";
  }
  if (string===string.toUpperCase()) {
    return "YES INDEED!";
  }
  if ("I love you, Grandma.") {
    return "I love you, too.";
  }
}