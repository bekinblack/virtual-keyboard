import './app.scss';
import buildTitle from '../components/title/title';
import buildTextarea from '../components/textarea/textarea';
import buildKeyboard from '../components/keyboard/keyboard';
import createStore from '../store/create-store';
import rootReducer from '../store/root-reducer';
import buildHint from '../components/hint/hint';

export default class App {
  store = createStore(rootReducer, {
    lang: localStorage.getItem('lang') || 'english',
    shift: false,
    capslock: false,
    control: false,
    alt: false,
    textareaContent: '',
    cursorPosition: 0,
    lineLength: 0,
  });

  run() {
    const { body } = document;
    body.innerHTML = '';
    body.append(buildTitle(this.store));
    body.append(buildTextarea(this.store));
    body.append(buildKeyboard(this.store));
    body.append(buildHint(this.store));

    body.addEventListener('keydown', (event) => {
      const key = document.getElementById(event.code);
      if (key) {
        event.preventDefault();
        if (key.id === 'AltRight') {
          this.store.dispatch({ type: '__IGNORE__' });
        } else { this.store.dispatch({ type: 'MOUSE_DOWN', payload: key.innerText }); }
      }
    });

    body.addEventListener('keyup', (event) => {
      const { alt, control } = this.store.getState();
      if (alt && control) {
        this.store.dispatch({ type: 'MOUSE_UP', payload: 'Lang' });
      }

      const key = document.getElementById(event.code);
      if (key) {
        event.preventDefault();
        this.store.dispatch({ type: 'MOUSE_UP', payload: key.innerText });
      }
    });
  }
}
