// ==UserScript==
// @name        CUHK LexiCan Sound Fixer
// @namespace   nickdoth
// @include     http://humanum.arts.cuhk.edu.hk/Lexis/lexi-can/search.php*
// @version     1
// @grant       none
// ==/UserScript==

var audio = new Audio()

Array.from(document.querySelectorAll('a[target=sound]')).forEach(node => {
  node.addEventListener('click', (evt) => {
    var src = 'sound/' + /sound.php\?s=(\w+)/.exec(node.href)[1] + '.wav'
    if (src === audio.src && audio.playing) return
    
    evt.preventDefault()
    audio.src = src
    audio.play()
  })
})