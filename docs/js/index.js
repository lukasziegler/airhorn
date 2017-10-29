function play(cardEl, audioEl, duration) {
    audioEl.play();
    cardEl.classList.add('card--show-giphy');

    setTimeout(function () {
        cardEl.classList.remove('card--show-giphy');
    }, duration);
}

function start (id, duration) {
    if (duration === undefined) {
        duration = 3000;
    }

    if (id === undefined) {
        return;
    }

    var audioEl = document.getElementById(id);
    var cardEl = event.currentTarget;

    if (audioEl.readyState === 4) {
        play(cardEl, audioEl, duration);
    } else {
        cardEl.classList.add('card--loading');
        audioEl.addEventListener('oncanplay', play, false);
    }
}

function clipEnd() {
    console.log('audio clip ended: ', event.srcElement.id)
}