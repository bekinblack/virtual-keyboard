import './app.scss';
import buidTitle from '../components/title/title';
import buidTextarea from '../components/textarea/textarea';
import buidKeyboard from '../components/keyboard/keyboard';
import createStore from '../store/create-store';
import rootReducer from '../store/root-reducer';
import buidHint from '../components/hint/hint';

export default class App {
  store = createStore(rootReducer, {
    lang: localStorage.getItem('lang') || 'english',
    shift: false,
    capslock: false,
    textareaContent: '',
    cursorPosition: 0,
  });

  run() {
    const { body } = document;
    body.innerHTML = '';
    body.append(buidTitle(this.store));
    body.append(buidTextarea(this.store));
    body.append(buidKeyboard(this.store));
    body.append(buidHint(this.store));
  }
}
