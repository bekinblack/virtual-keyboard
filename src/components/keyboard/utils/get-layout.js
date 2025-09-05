export default function getLayout(shift, capslock) {
  if (shift && capslock) {
    return 'shifted_capslocked';
  }

  if (shift) {
    return 'shifted';
  }

  if (capslock) {
    return 'capslocked';
  }

  return 'normal';
}
