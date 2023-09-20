function maxChars(str) {
  let charsMap = {};
  let max = 0;
  let maxChar = "";

  for (const char of str) {
    if (!charsMap[char]) {
      charsMap[char] = 1;
    } else {
      charsMap[char]++;
    }
  }

  for (let char in charsMap) {
    if (charsMap[char] > max) {
      max = charsMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(maxChars("Heeellllo"));
