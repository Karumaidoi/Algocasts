function stringReversal(string) {
  return string.split("").reduce((reversed, character) => character + reversed);
}

console.log(stringReversal("hello"));
