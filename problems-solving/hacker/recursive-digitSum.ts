function superDigit({ n, k }: { n: string; k: number }): number {
  // Calculate the super digit of a single number
  const calculateSuperDigit = (num: string): number => {
    if (num.length === 1) {
      return parseInt(num);
    }
    let sum = 0;
    for (let digit of num) {
      sum += parseInt(digit);
    }
    return calculateSuperDigit(sum.toString());
  };

  // Calculate the super digit of the repeated number
  const repeatedNumber = n.repeat(k);
  return calculateSuperDigit(repeatedNumber);
}

// console.log(superDigit({ n: '9875', k: 4 }))
// console.log(superDigit({ n: '148', k: 3 }));
console.log(superDigit({ n: '1', k: 4 }));
/*
148+148+148 = 148148148
1 + 4 + 8 + 1 + 4 + 8 + 1 + 4 + 8 = 39
3 + 9 = 12
1 + 2 = 3
*/

/*
  super_digit(9875) 9+8+7+5 = 29
	super_digit(29) 	2 + 9 = 11
	super_digit(11)		1 + 1 = 2
	super_digit(2)		= 2
*/
