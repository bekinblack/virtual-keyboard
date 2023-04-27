import './app.scss'
import buildButton from '../components/button/button';

export default class App {

  run() {
    const { body } = document
    body.append(buildButton())
  }
}