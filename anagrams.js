function helper(str) {
  let charMap = {};
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  return charMap;
}

function anagrams(strA, strB) {
  const charMapA = helper(strA);
  const charMapB = helper(strB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
    return false;

  for (const char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }

  return true;
}

console.log(anagrams("eye", "eyez"));
