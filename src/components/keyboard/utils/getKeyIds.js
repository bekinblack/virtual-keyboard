import layouts from '../layouts';
import keymap from './keymap';

function getKeyIds() {
  return layouts.english.normal.map((_, index) => keymap[index]);
}

export default getKeyIds();
