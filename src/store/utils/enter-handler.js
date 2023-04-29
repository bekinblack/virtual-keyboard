export default function enterHandler(state) {
  const { textareaContent, cursorPosition } = state;

  const newContent = `${textareaContent.slice(0, cursorPosition)}\n${textareaContent.slice(cursorPosition)}`;

  return {
    ...state,
    textareaContent: newContent,
    cursorPosition: cursorPosition + 1,
  };
}
