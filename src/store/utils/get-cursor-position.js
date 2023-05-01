export default function getCursorPosition(content, position, direction) {
  // Split content into a matrix
  const contentMatrix = content.split('\n').map((line) => {
    const lineArray = line.split('');
    lineArray.push('\n');
    return lineArray;
  });

  let line = 0;
  let offset = position;

  contentMatrix.every((array) => {
    if (offset >= array.length && offset > 0) {
      line += 1;
      offset -= array.length;
    } else {
      return false;
    }
    return true;
  });

  // Change position in the matrix
  if (direction === 'UP') {
    if (line > 0) {
      line -= 1;
      const nextLineLength = contentMatrix[line].length - 1;

      offset = offset > nextLineLength
        ? nextLineLength
        : offset;
    } else {
      offset = 0;
    }
  } else if (line < contentMatrix.length - 1) {
    line += 1;
    const nextLineLenght = contentMatrix[line].length - 1;

    offset = offset > nextLineLenght
      ? nextLineLenght
      : offset;
  } else {
    offset = contentMatrix[line].length - 1;
  }

  // Change matrix position to the content position
  const newPosition = contentMatrix.slice(0, line).flat().length + offset;

  return newPosition;
}
