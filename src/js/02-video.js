
import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

const onPlay = function(data) {
    console.log("data: ", data)
};

const onTimeUpdate = throttle(function(data) {
    window.localStorage.setItem('videoplayer-current-time', JSON.stringify(data.seconds))
}, 1000)

player.setCurrentTime(window.localStorage.getItem('videoplayer-current-time')).then(function(seconds) {
   console.log("seconds", seconds);

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:          
            break;
    }
});

player.on('play', onPlay);
player.on('timeupdate', onTimeUpdate);
player.off('play', onPlay);