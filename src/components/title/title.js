import styles from './title.module.scss';

export default function buidTitle(str) {
  const title = document.createElement('h1');
  title.classList.add(styles.title);
  title.innerText = str;
  return title;
}
