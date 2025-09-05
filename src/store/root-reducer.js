import { mouseUpReducer, mouseDownReducer } from './mouse-redusers';

export default function rootReducer(state, action) {
  switch (action.type) {
    case 'MOUSE_DOWN':
      return mouseDownReducer(state, action.payload);

    case 'MOUSE_UP':
      return mouseUpReducer(state, action.payload);

    case 'TEXTAREA_CLICK':
      return { ...state, cursorPosition: action.payload };

    default:
      return state;
  }
}
