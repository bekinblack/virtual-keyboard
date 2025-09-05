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

  if (keyId === 'Space') {
    key.style.color = 'transparent';
  }
  if (keyId === 'CapsLock') {
    key.addEventListener('click', () => {
      key.classList.toggle(styles.capslock_active);
    });
  }

  document.body.addEventListener('keydown', (event) => {
    if (event.code === 'AltRight') {
      const leftControl = document.getElementById('ControlLeft');
      leftControl.classList.remove(styles.active);
    }

    if (event.code === key.id) {
      key.classList.add(styles.active);
    }
  });

  document.body.addEventListener('keyup', (event) => {
    if (event.code === key.id) {
      key.classList.remove(styles.active);
    }

    if (event.code === 'CapsLock') {
      key.classList.toggle(styles.capslock_active);
    }

    if (event.code.includes('Shift')) {
      key.classList.remove(styles.active);
    }
  });

  return key;
}
