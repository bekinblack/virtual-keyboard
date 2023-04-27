import './app.scss';
import buidTitle from '../components/title/title';
import buidTextarea from '../components/textarea/textarea';
import buidKeyboard from '../components/keyboard/keyboard';

export default class App {
  static run() {
    const { body } = document;
    body.append(buidTitle('Виртуальная клавиатура'));
    body.append(buidTextarea());
    body.append(buidKeyboard());
  }
}
