function gridChallenge(grid: Array<string>) {
  const result = [] as Array<string>;
  for (let element of grid) {
    const row = element
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('');
    result.push(row);
  }
  let start = 0;
  let next = 1;

  while (next < result.length) {
    let i = 0;
    let row = result[start];
    let nextRow = result[next];

    while (i < row.length) {
      if (row.charCodeAt(i) > nextRow.charCodeAt(i)) {
        console.log('NO');
        return "NO"
      }
      i++;
    }
    next = next + 1;
  }
  console.log('YES');
  return "YES"
}

gridChallenge(['eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv'])
gridChallenge(['abc', 'ade', 'efg'])
