function capitalizeString(str) {
  //1. Split the string using spaces [Alex, maina]
  const arrString = str.split(" ");
  //2.
  const newArray = arrString.map((word) => {
    return `${word.at(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
  });

  return newArray.join(" ");
}

console.log(capitalizeString("a"));
