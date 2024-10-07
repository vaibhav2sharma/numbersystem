// code for even and odd function

function even2odd(arr) {
  if (arr.length <= 0) {
    console.log("enter valid array");
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        console.log(`even number ${arr[i]}`);
      } else if (arr[i] % 2 !== 0) {
        console.log(`odd number ${arr[i]}`);
      }
    }
  }
}

const numbers = [
  3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
];

even2odd(numbers);
