import styles from './title.module.scss';

function setLang(lang) {
  return lang === 'russian'
    ? 'Виртуальная клавиатура'
    : 'Virtual Keyboard';
}

export default function buidTitle(store) {
  const { lang } = store.getState();
  const title = document.createElement('h1');
  title.classList.add(styles.title);
  title.innerText = setLang(lang);

  store.subscribe(() => {
    const { lang: newLang } = store.getState();
    title.innerText = setLang(newLang);
  });
  return title;
}
