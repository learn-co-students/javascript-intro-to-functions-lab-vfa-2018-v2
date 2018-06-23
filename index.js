function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  string = string.toUpperCase();
  return console.log(string);
}

function logWhisper(string){
  string = string.toLowerCase();
  return console.log(string);
}

function sayHiToGrandma(string){
  var returnValue;
  if (string === "I love you, Grandma."){
    returnValue = "I love you, too.";
  }
  else if (string.toLowerCase() === string){
    returnValue = "I can\'t hear you!";
  }
  else if (string.toUpperCase() === string){
    returnValue =  "YES INDEED!";
  }
  return returnValue;
}