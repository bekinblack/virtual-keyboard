import styles from './key.module.scss';
import { wides, darks } from './constants';

export default function buidKey(label) {
  const key = document.createElement('button');
  key.classList.add(styles.key);

  if (wides.includes(label)) {
    key.classList.add(styles.wide);
  }

  if (darks.includes(label)) {
    key.classList.add(styles.dark);
  }

  if (label === 'space') {
    key.classList.add(styles.extra_wide);
  } else if (label === 'Caps') {
    key.classList.add(styles.capslock);
  }

  key.innerText = label === 'space' ? '' : label;
  return key;
}
