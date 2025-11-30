export function encryptString(text, salt) {
  const textChars = Array.from(text).map(c => c.charCodeAt(0));
  const saltChars = Array.from(salt).map(c => c.charCodeAt(0));

  // XOR every character with salt
  const xored = textChars.map((char, i) => char ^ saltChars[i % saltChars.length]);

  // Convert to Base64 to look cleaner
  return btoa(String.fromCharCode(...xored));
}
