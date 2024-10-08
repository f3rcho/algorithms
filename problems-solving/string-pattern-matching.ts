/*
You are given two strings: pattern and source. The first string pattern contains only the symbols 0 and 1, and the second string source contains only lowercase English letters.

Your task is to calculate the number of substrings of source that match pattern. 

We’ll say that a substring source[l..r] matches pattern if the following three conditions are met:
– The pattern and substring are equal in length.
– Where there is a 0 in the pattern, there is a vowel in the substring. 
– Where there is a 1 in the pattern, there is a consonant in the substring. 

Vowels are ‘a‘, ‘e‘, ‘i‘, ‘o‘, ‘u‘, and ‘y‘. All other letters are consonants.
You are given two strings: pattern and source. The first string pattern contains only the symbols 0 and 1, and the second string source contains only lowercase English letters.

Your task is to calculate the number of substrings of source that match pattern. 

We’ll say that a substring source[l..r] matches pattern if the following three conditions are met:
– The pattern and substring are equal in length.
– Where there is a 0 in the pattern, there is a vowel in the substring. 
– Where there is a 1 in the pattern, there is a consonant in the substring. 

Vowels are ‘a‘, ‘e‘, ‘i‘, ‘o‘, ‘u‘, and ‘y‘. All other letters are consonants.

Example

For pattern = "010" and source = "amazing", the output should be solution(pattern, source) = 2.
– “010” matches source[0..2] = "ama". The pattern specifies “vowel, consonant, vowel”. “ama” matches this pattern: 0 matches a, 1 matches m, and 0 matches a. 
– “010” doesn’t match source[1..3] = "maz" 
– “010” matches source[2..4] = "azi" 
– “010” doesn’t match source[3..5] = "zin" 
– “010” doesn’t match source[4..6] = "ing"

So, there are 2 matches. For a visual demonstration, 
*/

const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

function checkForPattern(pattern: string, source: string, startIndex: number) {
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === '0') {
      console.log(`source:${source}[startIndex${startIndex}] + i${i}`)
      console.log(`char: ${source[startIndex + i]}`)
      console.log(!vowels.includes(source[startIndex + i]))
      if (!vowels.includes(source[startIndex + i])) { // is a consonant
        return 0;
      }
    } else if (vowels.includes(source[startIndex + i])) { // is a vowel
      console.log(vowels.includes(source[startIndex + i]))
      return 0;
    }
  }
  return 1;
}

function stringPatternMatching(pattern: string, source: string) {
  let result = 0;
  for (let i = 0; i <= source.length - pattern.length; i++) {
    console.log({i})
    result += checkForPattern(pattern, source, i);
    console.log({result})
  }
  return result;
}

console.log(stringPatternMatching('010', 'amazing')); // 2
console.log(stringPatternMatching('100', 'codesignal')); // 0
