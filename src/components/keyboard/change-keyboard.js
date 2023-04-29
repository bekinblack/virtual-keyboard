import layouts from './layouts';
import getLayout from './utils/get-layout';
import keyIds from './utils/getKeyIds';

export default function changeKeyboard({ lang, capslock, shift }) {
  const layout = getLayout(shift, capslock);
  const keys = layouts[lang][layout];

  keyIds.forEach((keyId, index) => {
    const element = document.getElementById(keyId);
    [element.innerText] = keys[index].split('-r');
  });
}
