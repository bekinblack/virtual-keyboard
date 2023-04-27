import buidKey from '../key/key';
import styles from './keyboard.module.scss';
import layouts from './layouts';

function getLayout(shift, capslock) {
  switch ({ shift, capslock }) {
    case shift && capslock:
      return 'shifted_capslocked';

    case shift:
      return 'shifted';

    case capslock:
      return 'capslocked';

    default:
      return 'normal';
  }
}

export default function buidKeyboard({ lang, capslock, shift }) {
  const keyboard = document.createElement('div');
  keyboard.classList.add(styles.keyboard);

  const layout = getLayout(shift, capslock);
  const keys = layouts[lang][layout];

  keys.forEach((key) => {
    keyboard.append(buidKey(key));
  });

  return keyboard;
}
