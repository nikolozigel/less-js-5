let array = [1, 2, 3, 4, 5];
let reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
}
console.log(reversedArray);


let array5 = [1, 2, 3, 7, 6, 9];

for (let i = 0; i < array5.length; i++) {
    if (array5[i] === 7) {
        // continue; 
    }
    console.log(array5[i]);
}
let array1 = [1, 2, 4, 8, 7, 15, 25, 3, 18, 12];
let result = [];

for (let i = 0; i < array1.length; i++) {
  if (array1[i] > 5) {
    result.push(array1[i]);
  }
}

console.log(result);