function vowels(word) {
  let counter = 0;
  let checker = "aeiou";

  for (let char of word.toLowerCase()) {
    if (checker.includes(char)) {
      counter++;
    }
  }

  console.log(counter);
}

vowels("Hello how is Alex?");
