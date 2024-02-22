function caesarCipher(text: string, shift: number): string {
  // Normalize the shift value to ensure it's within the range [0, 25]
  shift = shift % 26;
  console.log({ shift });

  // Define the original and shifted alphabets
  const originalAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const shiftedAlphabet =
    originalAlphabet.slice(shift) + originalAlphabet.slice(0, shift);
  console.log({ shiftedAlphabet }); // jklmnopqrstuvwxyzabcdefghi

  // Initialize an empty string to store the encrypted text
  let encryptedText = '';

  // Loop through each character in the input text
  for (const element of text) {
    const char = element.toLowerCase();
    const index = originalAlphabet.indexOf(char);

    // Check if the character is a letter
    if (index !== -1) {
      // Encrypt the character
      const encryptedChar =
        element === element.toUpperCase()
          ? shiftedAlphabet[index].toUpperCase()
          : shiftedAlphabet[index];
      encryptedText += encryptedChar;
    } else {
      // Preserve non-alphabetic characters
      encryptedText += element;
    }
  }

  return encryptedText;
}

// Example usage
const text = 'www.abc.xy"';
const shift = 87; // Shift value greater than 26
const encryptedText = caesarCipher(text, shift);
console.log('Encrypted text:', encryptedText); // Output: fff.jkl.gh!
