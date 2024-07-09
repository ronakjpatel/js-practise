let arr = ["I", "Love", "Mangoes"];

console.log(arr.concat([3, 4], 5, 6));

arr.splice(-1, 0, "We", "we all", "I know");

console.log(arr);

// For each
let arr2 = ["I", "Love", "Mangoes"];

arr2.forEach((value, index, array) => {
  console.log(
    `The value is ${value}, Index is ${index} and the array is ${array}`
  );
});

let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

numbers.sort((a, b) => b - a);

console.log(numbers);

let arr3 = [1, 2, 3, 4];

let final_sum = arr3.reduce((accum, currVal, index) => {
  console.log("Currently we are at the Index " + index);
  return (accum = accum + currVal);
}, 10);

console.log("Sum of the numbers after the reduce funtion is " + final_sum);

let arr4 = [2, 40, 50, 1, 3];

arr4 = arr4.filter((eachVal, index, array) => eachVal < 10);

console.log(arr4);

let arr5 = [10, 20, 30, 40, 50];

arr5.map((eachValue, indexVal, array) => {
  return eachValue * 10;
});

console.log(arr5);
