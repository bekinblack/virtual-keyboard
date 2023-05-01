export default function tabHandler(state) {
  const { textareaContent, cursorPosition } = state;

  const newContent = `${textareaContent.slice(0, cursorPosition)}\t${textareaContent.slice(cursorPosition)}`;

  return {
    ...state,
    textareaContent: newContent,
    cursorPosition: cursorPosition + 1,
  };
}
