function largestOfFour(arr) {
  let largestNumber = 0;
  let tab = [];
  for (i = 0; i < arr.length; i++) {
    for (j = 1; j < arr[i].length; j++) {
      if (largestNumber < arr[i][j]) {
        largestNumber = arr[i][j];
      }
    }
    tab.push(largestNumber);
    largestNumber = 0;
  }
  console.log(tab);
  return arr;
}
largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
largestOfFour([
  [4, 9, 1, 3],
  [13, 35, 18, 26],
  [32, 35, 97, 39],
  [1000000, 1001, 857, 1],
]);
