/*1.1 **Is Unique**: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data strutures?
*/

function isUnique(string: string){
    const charSet = new Set()

    for(let i = 0; i < string.length; i++) {
        if(charSet.has(string[i])){
            return false
        }
        charSet.add(string[i])
    }
    return true
}

console.log(isUnique('omaru'))
console.log(isUnique('amar'))

function isUniqueWithoutDataStructure(str: string) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false
            }
        }
    }
    return true
}

console.log(isUniqueWithoutDataStructure('omaru'))
console.log(isUniqueWithoutDataStructure('amar'))
