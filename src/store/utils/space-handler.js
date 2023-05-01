export default function spaceHandler(state) {
  const { textareaContent, cursorPosition } = state;

  const newContent = `${textareaContent.slice(0, cursorPosition)} ${textareaContent.slice(cursorPosition)}`;

  return {
    ...state,
    textareaContent: newContent,
    cursorPosition: cursorPosition + 1,
  };
}
