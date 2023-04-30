import styles from './textarea.module.scss';

export default function buildTextarea(store) {
  const textarea = document.createElement('textarea');
  textarea.classList.add(styles.textarea);
  textarea.autofocus = true;

  store.subscribe(() => {
    const { textareaContent, cursorPosition } = store.getState();
    textarea.value = textareaContent;
    textarea.selectionStart = cursorPosition;
    textarea.selectionEnd = cursorPosition;
    textarea.focus();
  });

  return textarea;
}
