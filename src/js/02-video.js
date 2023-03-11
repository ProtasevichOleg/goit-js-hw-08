import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// import savePlaybackPosition from './utils/savePlaybackPosition';

const player = new Player('vimeo-player');
const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
  player.setCurrentTime(currentTime);
}

player.on('timeupdate', throttle(savePlaybackPosition, 1000));

function savePlaybackPosition(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}
