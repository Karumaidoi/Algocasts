function maxChars(str) {
  let chars = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }

  for (const char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(maxChars("Heeellllo"));
