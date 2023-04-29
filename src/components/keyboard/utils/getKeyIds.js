import layouts from '../layouts';

function getKeyIds() {
  return layouts.english.normal.map((key) => `id-${key}`);
}

export default getKeyIds();
