import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import savePlaybackPosition from './utils/savePlaybackPosition';

export const localStorageKey = 'videoplayer-current-time';
const player = new Player('vimeo-player');
const currentTime = localStorage.getItem(localStorageKey);

if (currentTime) {
  player.setCurrentTime(currentTime);
}

player.on('timeupdate', throttle(savePlaybackPosition, 1000));
