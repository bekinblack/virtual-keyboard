import styles from './textarea.module.scss';

export default function buildTextarea(store) {
  const textarea = document.createElement('textarea');
  textarea.classList.add(styles.textarea);
  textarea.autofocus = true;
  textarea.addEventListener('click', () => {
    const direct = textarea.selectionDirection;
    const position = direct === 'backward'
      ? textarea.selectionStart
      : textarea.selectionEnd;

    store.dispatch({ type: 'TEXTAREA_CLICK', payload: position });
  });

  store.subscribe(() => {
    const { textareaContent, cursorPosition } = store.getState();
    textarea.value = textareaContent;
    textarea.selectionStart = cursorPosition;
    textarea.selectionEnd = cursorPosition;
    textarea.focus();
  });

  return textarea;
}
