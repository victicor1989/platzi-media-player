
function mediaPlayer(config) {
    this.media = config.el
}

mediaPlayer.prototype.play = function() {
    this.media.play()
}

mediaPlayer.prototype.pause = function() {
    this.media.pause()
}

mediaPlayer.prototype.tooglePlay = function() {
    if (this.media.paused) {
        this.play()
    } else {
        this.pause()
    }
}

const video = document.querySelector('video')
const player = new mediaPlayer({ el: video})

const button = document.querySelector('button')
button.onclick = () => player.tooglePlay()