export default function addCharacter(state, payload) {
  const { textareaContent, cursorPosition } = state;

  const newContent = textareaContent.slice(0, cursorPosition)
    + payload + textareaContent.slice(cursorPosition);

  return {
    ...state,
    textareaContent: newContent,
    cursorPosition: cursorPosition + 1,
  };
}
