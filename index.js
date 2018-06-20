function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(shout('hello'))
  }
 function logWhisper(string){
   console.log(whisper('HELLO'))
 }
 function sayHitoGrandma(string){
  var whisper = 'I can\'t hear you!'
  var shout = 'YES INDEED!'
  return whisper + shout;
}