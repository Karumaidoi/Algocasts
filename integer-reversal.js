function reverseInt(n) {
  const reverse = n.toString().split("").reverse().join("");
  console.log(Math.sign(n));

  return parseInt(reverse) * Math.sign(n);
}

function reverseInteger(n) {
  const numbers = [];
  let newArray = [];

  const isNegative = Math.sign(n);
  if (isNegative === -1) {
    let nums = n.toString().split("");
    newArray = nums.reverse();
  } else {
    newArray = n.toString().split("").reverse();
  }

  for (let index = newArray.length; index > 0; index--) {
    numbers.unshift(newArray.at(index - 1));
  }

  return parseInt(numbers.join("")) * Math.sign(n);
}

console.log(reverseInteger(768310235));
