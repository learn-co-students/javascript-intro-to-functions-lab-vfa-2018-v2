function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var word='hello'
  var result
  if (string===word){
    result="HELLO"
  }else if (string==="HELLO"){
    result="HELLO"}
  console.log(result)
}

function logWhisper(string) {
  var word='HELLO'
  var result
  if (string===word){
    result="hello"
  }else if (string==="hello"){
    result="hello"}
  console.log(result)
}

function sayHiToGrandma(string) {
  var lowercase= "hello"
  var answer
  var uppercase= "HELLO"
  if (string === lowercase){
    answer= "I can't hear you!";
  }else if (string===uppercase){
    answer= "YES INDEED!"
  }else if (string==="I love you, Grandma."){
    answer= "I love you, too."
  }
  return (answer);
}