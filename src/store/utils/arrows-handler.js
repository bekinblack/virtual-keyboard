import getCursorPosition from './get-cursor-position';

export function arrowLeftHandler(state) {
  if (state.cursorPosition === 0) {
    return state;
  }

  return {
    ...state,
    cursorPosition: state.cursorPosition - 1,
  };
}

export function arrowRightHandler(state) {
  const position = state.cursorPosition < state.textareaContent.length
    ? state.cursorPosition + 1
    : state.textareaContent.length;

  return {
    ...state,
    cursorPosition: position,
  };
}

export function arrowUpHandler(state) {
  const { textareaContent, cursorPosition } = state;
  const newPosition = getCursorPosition(textareaContent, cursorPosition, 'UP');

  return {
    ...state,
    cursorPosition: newPosition,
  };
}

export function arrowDownHandler(state) {
  const { textareaContent, cursorPosition } = state;
  const newPosition = getCursorPosition(textareaContent, cursorPosition, 'DOWN');

  return {
    ...state,
    cursorPosition: newPosition,
  };
}
