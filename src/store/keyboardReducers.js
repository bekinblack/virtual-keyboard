import addCharacter from './utils/add-character';

export function keyDownReducer(state, payload) {
  switch (payload) {
    case 'Shift':
      return { ...state, shift: true };

    default:
      return addCharacter(state, payload);
  }
}

export function keyUpReducer(state, payload) {
  switch (payload) {
    case 'Shift':
      return { ...state, shift: false };

    default:
      return state;
  }
}
