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
    audio.src = '//dl.stream.qqmusic.qq.com/C400001J5QJL1pRQYB.m4a?fromtag=38&vkey=A296ECD23A31913BD0F6D990CAF55DE1577D9B44087923DEFCEEBFFACE53DBEE7C5B5BD48F0EA9C869D9EA8A8D859DB25E5ACC4436A64E31&guid=6800799492'
    audio.oncanplay = function(){
      audio.play()
      $('.disc-container').addClass('playing')
    }
    $('.icon-pause').on('click',function(){
      audio.pause()
      $('.disc-container').removeClass('playing')
    })
    $('.icon-play').on('click',function(){
      audio.play()
      $('.disc-container').addClass('playing')
    })
  }
)