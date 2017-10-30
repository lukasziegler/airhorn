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
        play();
    } else {
        cardEl.classList.add('card--loading');
        audioEl.load();
        audioEl.addEventListener('canplaythrough', playCallback);
    }

    function playCallback() {
        cardEl.classList.remove('card--loading');
        play();
    }

    function play() {
        audioEl.play();
        cardEl.classList.add('card--show-giphy');

        setTimeout(function () {
            cardEl.classList.remove('card--show-giphy');
        }, duration);
    }
}

function clipEnd() {
    console.log('audio clip ended: ', event.srcElement.id)
}