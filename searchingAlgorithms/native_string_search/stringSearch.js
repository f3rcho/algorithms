function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      console.log(long[i + j], short[j], `j:${j} i:${i}`);
      if (short[j] !== long[i + j]) {
        console.log('BREAK');
        break;
      }
      if (j === short.length - 1) {
        console.log('COUNT');
        count++;
      }
    }
  }
  return count;
}

console.log(naiveSearch('lorie loled lol', 'lol'));
// 0 0
// 0 1
// 0 2
