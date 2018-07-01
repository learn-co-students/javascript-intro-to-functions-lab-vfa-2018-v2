function shout(string){
  
return string.toUpperCase()
}

function whisper(string) {

  return string.toLowerCase()
}

var uppercase = "HELLO!"
 
uppercase.toUpperCase() === uppercase // true
 
var lowercase = 'hello!'
 
lowercase.toLowerCase() === lowercase // true
 
var mixedCase = 'Hi there!'
 
mixedCase.toLowerCase() === mixedCase // false
 
mixedCase.toUpperCase() === mixedCase // false

function logShout(string){
 var spy
 spy = "HELLO"
  console.log(spy); string.toUpperCase
}

function logWhisper(string){
 var spy
 spy = "hello"
  console.log(spy); string.toLowerCase
}


function sayHitoGrandma(string){
  if(string=uppercase){
    response = "YES INDEED!";
  }else if(string=lowercase){
    response = "I can\'t hear you!";
  }else
    response = "I love you,too";
}
return(response)
  
}

