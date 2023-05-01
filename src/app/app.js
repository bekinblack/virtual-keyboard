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
        this.store.dispatch({ type: 'MOUSE_DOWN', payload: key.innerText });
      }
    });

    body.addEventListener('keyup', (event) => {
      const key = document.getElementById(event.code);
      if (key) {
        event.preventDefault();
        this.store.dispatch({ type: 'MOUSE_UP', payload: key.innerText });
      }
    });
  }
}
