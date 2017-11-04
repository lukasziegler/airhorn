function start (id) {
    if (id === undefined) {
        return;
    }

    var audioEl = document.getElementById(id);
    var cardEl = event.currentTarget;

    if (audioEl.readyState === 4) {
        play();
    } else {
        cardEl.classList.add('card--loading');
        audioEl.load();
        audioEl.addEventListener('canplaythrough', clipLoadedCallback);
    }

    function play() {
        audioEl.addEventListener('ended', clipEndedCallback);
        audioEl.play();
        cardEl.classList.add('card--show-giphy');
    }

    function clipLoadedCallback() {
        cardEl.classList.remove('card--loading');
        play();
    }

    function clipEndedCallback() {
        cardEl.classList.remove('card--show-giphy');
    }
}