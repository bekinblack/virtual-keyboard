export default function addCharacter(state, payload) {
  const { textareaContent, cursorPosition, lineLength } = state;
  const needNewLine = lineLength >= 59;

  const newCursorPosition = needNewLine
    ? cursorPosition + 2
    : cursorPosition + 1;

  const newContent = textareaContent.slice(0, cursorPosition)
    + payload
    + textareaContent.slice(cursorPosition);

  return {
    ...state,
    textareaContent: needNewLine ? `${newContent}\n` : newContent,
    cursorPosition: newCursorPosition,
    lineLength: needNewLine ? 0 : lineLength + 1,
  };
}
