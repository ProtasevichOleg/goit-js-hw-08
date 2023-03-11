import { localStorageKey } from '../02-video';

export default function savePlaybackPosition(data) {
  localStorage.setItem(localStorageKey, JSON.stringify(data.seconds));
}
