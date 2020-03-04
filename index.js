function shout(string){

return string.toUpperCase()}

function whisper(string) {

return string.toLowerCase()}

function logShout(string) {
  console.log(string.toUpperCase())}

function logWhisper(string) {
  console.log(string.toLowerCase())}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
<<<<<<< HEAD
    return "I can't hear you!"
  }

  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }

  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
=======
    return "I can't hear you!"}

  if (string.toUpperCase() === string) {
    return "YES INDEED!"}

  if (string == "I love you, Grandma.") {}
>>>>>>> 5cb80e53e982f1f514c08f3fa10e7513a96b270c

  return "Are you eating enough?"}