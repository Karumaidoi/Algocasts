function fizzBuzz(n) {
  const arr = [...Array(n).keys()];

  arr.forEach((el) => {
    if (el % 2 === 0) {
      console.log("Fizz");
    } else if (el % 3 === 0) {
      console.log("Buzz");
    } else if (el % 5 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log("Not divisible");
    }
  });
}

// fizzBuzz(100);

function fizzBuzz2(n) {
  for (let index = 0; index < n; index++) {
    if (el % 2 === 0) {
      console.log("Fizz");
    } else if (el % 3 === 0) {
      console.log("Buzz");
    } else if (el % 5 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log("Not divisible");
    }
  }
}

fizzBuzz(10);
