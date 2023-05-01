export default function changeLang(state) {
  const newLang = state.lang === 'english' ? 'russian' : 'english';
  localStorage.setItem('🌐', newLang);
  return {
    ...state,
    lang: newLang,
  };
}
