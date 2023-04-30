import styles from './key.module.scss';
import { wides, darks } from './constants';

export default function buildKey(label, keyId) {
  const key = document.createElement('button');
  key.classList.add(styles.key);
  key.id = keyId;

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

  [key.innerText] = label.split('-r');

  if (keyId === 'id-space') {
    key.style.color = 'transparent';
  }
  if (keyId === 'id-Caps') {
    key.addEventListener('click', () => {
      key.classList.toggle(styles.capslock_active);
    });
  }

  return key;
}
