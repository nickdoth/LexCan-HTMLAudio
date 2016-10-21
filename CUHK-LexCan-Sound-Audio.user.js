var audio = new Audio();

Array.from(document.querySelectorAll('a[target=sound]')).forEach(node => {
  node.addEventListener('click', (evt) => {
    evt.preventDefault();
    console.log('Speaking: ' + node.href);
    audio.src = 'sound/' + /sound.php\?s=(\w+)/.exec(node.href)[1] + '.wav';
    audio.play();
  })
})