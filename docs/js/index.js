function start (id) {
    if (id === undefined) {
        return;
    }

    var audioEl = document.getElementById(id);
    var cardEl = event.currentTarget;

    audioEl.addEventListener('ended', clipEndedCallback);
    audioEl.play();
    cardEl.classList.add('card--show-giphy');

    function clipEndedCallback() {
        cardEl.classList.remove('card--show-giphy');
    }
}