export default function deleteHandler(state) {
  const { textareaContent, cursorPosition } = state;

  const newContent = textareaContent.slice(0, cursorPosition)
    + textareaContent.slice(cursorPosition + 1);

  return {
    ...state,
    textareaContent: newContent,
  };
}
