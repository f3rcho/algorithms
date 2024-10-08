/*
3. Valid Parentheses
Question
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

*/

function isValid(s: string): boolean {
  const stack: string[] = [];
  const mapping: { [key: string]: string } = {
      ')': '(',
      '}': '{',
      ']': '['
  };
  for (let char of s) {
    console.log("char", char);
      if (mapping[char]) {
          const topElement = stack.length === 0 ? '#' : stack.pop();
          if (topElement !== mapping[char]) {
              return false;
          }
      } else {
          stack.push(char);
      }
      console.log("stack", stack);
  }
  return stack.length === 0;
}
const s1 = "()";
const s2 = "()[]{}";
const s3 = "(]";
console.log(isValid(s1)); // Output: true
console.log(isValid(s2)); // Output: true
console.log(isValid(s3)); // Output: false
