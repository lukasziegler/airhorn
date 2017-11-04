function start (id) {
    if (id === undefined) {
        return;
    }

    var cardEl = event.currentTarget;
    var audioEl = document.getElementById(id);
    var isPlaying = false;

    console.log('isPlaying', isPlaying);

    if (isPlaying) {
        audioEl.pause();
        console.log('pause clip');
        return;
    }

    if (audioEl.readyState === 4) {
        play();
    } else {
        cardEl.classList.add('card--loading');
        audioEl.load();
        audioEl.addEventListener('canplaythrough', clipLoadedCallback);
    }

    function play() {
        audioEl.addEventListener('ended', clipEndedCallback);
        isPlaying = true;
        audioEl.play();
        cardEl.classList.add('card--show-giphy');

        console.log('play(): isPlaying', isPlaying);

    }

    function clipLoadedCallback() {
        cardEl.classList.remove('card--loading');
        play();
    }

    function clipEndedCallback() {
        cardEl.classList.remove('card--show-giphy');
        isPlaying = false;

        console.log('ended(): isPlaying', isPlaying);

    }
}