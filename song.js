$(
  function () {
    $.get('/lyric.json').then(function (object) {

      let lyric = object.lyric
     
      let array = lyric.split('\n')
      let regex = /^\[(.+)\](.*)$/
      array = array.map(function(string,index){
        let matches = string.match(regex)
        if(matches){
          return { time: matches[1], words: matches[2] }

        }
      })
      let $lyric = $('.lyric')
      array.map(function(object){
        if(!object){return}
        let $p = $('<p/>')
        $p.attr('data-time',object.time).text(object.words)
        $p.appendTo($lyric.children('.lines'))
      })
    })
    let audio = document.createElement('audio')
    audio.src = 'http://dl.stream.qqmusic.qq.com/C400001J5QJL1pRQYB.m4a?fromtag=38&vkey=F39DE47EA75E737F5F2C9D19FE80DF87EC7CB1EA96740CEB7F850AC61034274903B9FBC4343A34359BFA2ECC92305FF5418D5A1C8A4283FB&guid=6800799492'
    audio.oncanplay = function(){
      audio.play()
      $('.disc-container').addClass('playing')
    }
  }
)