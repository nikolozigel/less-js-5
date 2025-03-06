// ex1
let array2 = [14, 150, 'css', null, 'javascript', 25];
let newArray = array2.map(item => {
  if (typeof item === 'number') {
    return item * item; 
  } else if (typeof item === 'string') {
    return item.toUpperCase(); 
  } else {
    return item; 
  }
});

console.log(newArray);


// ex 2



// ex4 
let languages = ['html', 'css', 'javascript', 'python', 'php'];

let filtereLanguages = languages.filter(function(language) {
  return language.length > 3; 
});

console.log(filtereLanguages);


// ex 5 

let words = ['Madrid', 'rome', 'Milan', 'berlin']

let filterwords = words.filter(function(words) {
  return words.toLowerCase().includes('m');
})
console.log (filterwords)

// ex 6



// ex7 

let array6 = [-1, -2, -3, 4];

let Positivenomber = array6.some(function(number) {
  return number > 0; 
})

console.log (Positivenomber)


// ex 8 



// ex 9

let numbers = [5, 10, 15, 20, 25];

let sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); 



// ex 10

let arrayNestedNew = [
  [1,2],
  [3,4],
  [5,6],
].reduce(function (accumulator, currentValue) {
  return accumulator.concat(currentValue);
}, []);

console.log(arrayNestedNew);

// ex 11

// let array = [apple, kiwi, peach, orange, melon]; 

// array.splice(array.length - 2, 1, "strawberry");

// console.log(array); 




// ex 12




// ex 13

let myString = "hello";
function getStringLength(str) {
  return str.length;  // 
}
console.log(getStringLength(myString));


// ex 14


let numbers3 = [5, 25, 89, 120, 36];

numbers3.push("javascript", "python");

console.log(numbers3);  


let numbers4 = [5, 25, 89, 120, 36];

numbers4.unshift("html", "css");

console.log(numbers4);


let numbers5 = [5, 25, 89, 120, 36];


numbers5.shift();


numbers5.pop();

console.log(numbers5);




// ex 16
let array3 = [1, 2, 3, 4, 5];

array3.splice(3, 0, 'a', 'b', 'c');

console.log(array3);



// 17 

let array7 =  [15, 100, 25, 10, 36]

let DeletedValue = array7.splice(3,1)

console.log(DeletedValue)


// ex 18 

// let array8 = [1, 2, 3, 4, 5];

// let removedElement = array8.splice(2, 1, three);
// console.log(removedElement);
// console.log(array8);



// ex 19

let array8 = [14, 150, 'css', null, 'javascript', 25];

let newArray2 = array8.map(function(element) {
  if (typeof element === 'number') {
    return element * element;  
  } else if (typeof element === 'string') {
    return element.toUpperCase(); 
  } else {
    return element; 
  }
});

console.log(newArray);


// ex 20

let array5 = [12, 25, 3, 6, 8, 14, 7, 23];

let newArray3 = array5.map(function(element) {
  return element / 3; 
});

console.log(newArray3);



// ex 21

let array9 = ['apple', 'orange', 'mango', 'kiwi'];

array9.splice(2, 0, 'strawberry', 'avocado');

console.log(array9);
  


