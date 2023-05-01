import addCharacter from './utils/add-character';
import backspaceHandler from './utils/backspace-handler';
import deleteHandler from './utils/delete-handler';
import spaceHandler from './utils/space-handler';
import enterHandler from './utils/enter-handler';
import tabHandler from './utils/tab-hanlder';
import {
  arrowLeftHandler,
  arrowRightHandler,
  arrowUpHandler,
  arrowDownHandler,
} from './utils/arrows-handler';
import changeLang from './utils/change-lang';

export function mouseDownReducer(state, payload) {
  switch (payload) {
    case 'Shift':
      return { ...state, shift: true };

    case 'Caps':
      return state;

    case '◄':
      return arrowLeftHandler(state);

    case '►':
      return arrowRightHandler(state);

    case '▲':
      return arrowUpHandler(state);

    case '▼':
      return arrowDownHandler(state);

    case 'Enter':
      return enterHandler(state);

    case 'Backspace':
      return backspaceHandler(state);

    case 'Del':
      return deleteHandler(state);

    case 'space':
      return spaceHandler(state);

    case 'Tab':
      return tabHandler(state);

    case 'Ctrl':
      return { ...state, control: true };

    case 'Alt':
      return { ...state, alt: true };

    case 'Lang':
      return state;

    default:
      return addCharacter(state, payload);
  }
}

export function mouseUpReducer(state, payload) {
  switch (payload) {
    case 'Caps':
      return { ...state, capslock: !state.capslock };

    case 'Shift':
      return { ...state, shift: false };

    case 'Lang':
      return changeLang(state);

    case 'Ctrl':
      return { ...state, control: false };

    case 'Alt':
      return { ...state, alt: false };

    default:
      return { ...state };
  }
}
