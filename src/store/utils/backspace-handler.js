export default function backspaceHandler(state) {
  const { textareaContent, cursorPosition } = state;

  if (cursorPosition === 0) {
    return state;
  }

  const newContent = textareaContent.slice(0, cursorPosition - 1)
    + textareaContent.slice(cursorPosition);

  return {
    ...state,
    textareaContent: newContent,
    cursorPosition: cursorPosition - 1,
  };
}
