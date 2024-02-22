// write a function that transform the string into a matrix 2D with the corresponse pattern
/**
 *      lock  lock
 * rate price price
 * rate price price
 * rate price price
 */

/**
 *      10    20
 * 5.0  100   99
 * 5.5  101   100
 * 6.0  102   101
 *
//  */
const input = '5.0,100,5.5,101,6.0,102:L10;5.0,99,5.5,100,6.0,101:L20';

function transform(input) {
  const formatedArr = input.replace(new RegExp(':L', 'g'), ',');
  const splitedarr = formatedArr.split(';');

  const arr1 = splitedarr[0].split(',');
  const arr2 = splitedarr[1].split(',');

  //  ["5.0", "100", "5.5", "101", "6.0", "102", "10"]
  //  ["5.0", "99", "5.5", "100", "6.0", "101", "20"]

  for (let i = 0; i <= arr1.length; i++) {
    for (let j = 0; j <= arr2.length; j++) {
      const last = arr1.pop();
      const last2 = arr2.pop();
      console.log(null, last, last2);
      console.log(arr1[i], arr1[i + 1], arr2[j + 1]);
      console.log(arr1[i + 2], arr1[i + 3], arr2[j + 3]);
      console.log(arr1[i + 4], arr1[i + 5], arr2[j + 5]);
      return;
    }
  }
}

transform(input);

//expected output:
/**
  0.500000
  0.333333
  0.166667
 */