import styles from './hint.module.scss';
import hintText from './constants';

function setLang(lang) {
  return lang === 'russian'
    ? hintText.rus
    : hintText.eng;
}

export default function buildHint(store) {
  const { lang } = store.getState();
  const hint = document.createElement('h4');
  hint.classList.add(styles.hint);
  hint.innerText = setLang(lang);

  store.subscribe(() => {
    const { lang: newLang } = store.getState();
    hint.innerText = setLang(newLang);
  });
  return hint;
}
