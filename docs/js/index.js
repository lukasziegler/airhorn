function play (id, duration) {
    if (duration === undefined) {
        duration = 3000;
    }

    var cardEl = event.currentTarget;
    if (id !== undefined) {
        var audioEl = document.getElementById(id);
        audioEl.play();
    }

    cardEl.classList.add('card--show-giphy');
    setTimeout(function () {
        cardEl.classList.remove('card--show-giphy');
    }, duration);
}