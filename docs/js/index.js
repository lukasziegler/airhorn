function play (id, duration) {
    if (duration === undefined) {
        duration = 3000;
    }

    if (id === undefined) {
        return;
    }

    var audioEl = document.getElementById(id);
    var cardEl = event.currentTarget;

    if (audioEl.readyState === 4) {
        audioEl.play();
        cardEl.classList.add('card--show-giphy');
    } else {
        cardEl.classList.add('card--loading');
        audioEl.addEventListener('oncanplay', alert('event listener'));
    }



    audioEl.oncanplay = function(event) {
        console.log('fullyLoaded', event);
    }

    setTimeout(function () {
        cardEl.classList.remove('card--show-giphy');
    }, duration);
}

// Element fully loaded: event.srcElement.id