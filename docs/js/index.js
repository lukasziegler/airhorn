function play (id, duration) {
    if (duration === undefined) {
        duration = 3000;
    }

    var audioEl = document.getElementById(id);
    var cardEl = event.currentTarget;

    cardEl.classList.add('card--show-giphy');
    audioEl.play();

    setTimeout(function () {
        cardEl.classList.remove('card--show-giphy');
    }, duration);
}