import styles from './textarea.module.scss';

export default function buidTextarea() {
  const textarea = document.createElement('textarea');
  textarea.classList.add(styles.textarea);
  return textarea;
}
