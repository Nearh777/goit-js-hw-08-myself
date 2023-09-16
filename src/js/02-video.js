import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_CURRENT_TIME = 'videoplayer-current-time';
    
let isTimeNow = localStorage.getItem(KEY_CURRENT_TIME)



function CurrentTime(e) {
    localStorage.setItem(KEY_CURRENT_TIME, e.seconds);
};

function getCurrentTime(e) {
    if(isTimeNow) {
        player.setCurrentTime(isTimeNow);
        player.off('play', getCurrentTime);
    }
    player.on('timeupdate', Throttle(CurrentTime, 1000));
};

player.on('play', getCurrentTime);



//     player.on('timeupdate', function(currentTime) {
//         console.dir(currentTime.seconds);
//         localStorage.setItem("time", JSON.stringify(currentTime.seconds))
//     });

//     player.on('pause', function(currentTime) {
        
//         localStorage.getItem("time", JSON.stringify(currentTime.seconds)) ?? []
//     });

//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });

    
    

