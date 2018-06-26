function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  var result = string.toUpperCase();
  console.log(result);
}

function logWhisper(string){
  var solution = string.toLowerCase();
  console.log(solution);
}

function sayHiToGrandma(string){
  var uppercase = string;
  if (uppercase.toUpperCase() === uppercase){
    return "YES INDEED!";
  }
  var lowercase = string;
  if (lowercase.toLowerCase() === lowercase){
    return "I can't hear you!";
  }
  if (string === "I love you, Grandma."){
    return "I love you, too.";
  }
}
