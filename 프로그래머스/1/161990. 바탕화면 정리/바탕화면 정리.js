function solution(wallpaper) {
  const [minRow, maxRow, minCol, maxCol] = wallpaper.reduce(
    ([minRow, maxRow, minCol, maxCol], curStr, idx) => {
      [...curStr].forEach((curChar, index) => {
        if (curChar === "#") {
          if (minRow > idx + 1) minRow = idx + 1;
          if (maxRow < idx + 1) maxRow = idx + 1;
          if (minCol > index + 1) minCol = index + 1;
          if (maxCol < index + 1) maxCol = index + 1;
        }
      });
      return [minRow, maxRow, minCol, maxCol];
    },
    [51, 0, 51, 0]
  );
  return [minRow - 1, minCol - 1, maxRow, maxCol];
}