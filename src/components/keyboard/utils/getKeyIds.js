import layouts from '../constants/layouts';
import keymap from '../constants/keymap';

function getKeyIds() {
  return layouts.english.normal.map((_, index) => keymap[index]);
}

export default getKeyIds();
