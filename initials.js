function initials(str) {
  // Split the string
  const wordArr = str.trim().split(" ");

  if (wordArr.length === 1) return wordArr.at(0).split("").at(0).toUpperCase();

  // return the first el in the arr
  const newArray = wordArr.map((el) => {
    return el.at(0).toUpperCase();
  });

  return `${newArray.at(0)}${newArray.slice(newArray.length - 1)}`;
}

console.log(initials("Alex Maina Njoki"));
