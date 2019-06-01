describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
  function shout(string) {
    return 
  string.toUpperCase()
}
  })
})

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    function whisper (string) {
        return
    string.toLowerCase()
}
  })
})

describe('logShout(string)', function() {
  it('calls console.log() its one argument in all caps', function() {
    function logShout(string){
      console.log.restore()
    }
  })
})

describe('logWhisper(string)', function() {
  it('calls console.log() its one argument in all lowercase', function() {
    function logWhisper(string){
      console.log.restore()
    }
  })
})

describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    function sayHiToGrandma(string){
      return
    string.toLowerCase()
    }
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    function sayHiToGrandma(string){
      return
    string.toUpperCase()
} 
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    function sayHiToGrandma(string){
      return
    string
}
  })
})
