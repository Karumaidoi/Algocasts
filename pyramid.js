function pyramid(n) {
  const midpoint = Math.floor((n * 2 - 1) / 2);
  console.log(midpoint);

  for (let row = 0; row < n; row++) {
    let level = "";

    for (let col = 0; col < 2 * n - 1; col++) {
      if (midpoint - row <= col && midpoint + row >= col) {
        level += "#";
      } else {
        level += " ";
      }
    }

    console.log(level);
  }
}

pyramid(3);
