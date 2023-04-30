import buildKey from '../key/key';
import styles from './keyboard.module.scss';
import layouts from './constants/layouts';
import getLayout from './utils/get-layout';
import changeKeyboard from './change-keyboard';
import keyIds from './utils/getKeyIds';

export default function buildKeyboard(store) {
  const keyboard = document.createElement('div');
  keyboard.classList.add(styles.keyboard);

  let { lang, capslock, shift } = store.getState();
  const layout = getLayout(shift, capslock);
  const keys = layouts[lang][layout];

  keys.forEach((key, index) => {
    const button = buildKey(key, keyIds[index]);

    button.addEventListener(
      'mousedown',
      (event) => store.dispatch(
        {
          type: 'MOUSE_DOWN',
          payload: event.target.innerText,
        },
      ),
    );

    button.addEventListener(
      'click',
      (event) => store.dispatch({
        type: 'MOUSE_CLICK',
        payload: event.target.innerText,
      }),
    );

    button.addEventListener(
      'mouseup',
      (event) => store.dispatch({
        type: 'MOUSE_UP',
        payload: event.target.innerText,
      }),
    );

    keyboard.append(button);
  });

  store.subscribe(() => {
    const newState = store.getState();
    // console.log(newState);

    if (!(lang === newState.lang
      && newState.capslock === capslock
      && newState.shift === shift)) {
      lang = newState.lang;
      capslock = newState.capslock;
      shift = newState.shift;

      changeKeyboard(newState);
    }
  });

  return keyboard;
}
