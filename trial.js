// const nonRepeatingCharacter = (input) => {
//     //
//     if(input === ''){
//         return 'Error: Please insert characters';
//     }
//     let characterCount = 0;
//     for (let i = 0; i < input.length; i++) {
//         for (let j = 0; j < input.length; j++) {
//             if (input[i] === input[j] && input[i] !== ' ') {
//                 characterCount++;
//             }
//         }
//         if (characterCount === 1) {
//             return input[i];
//         }
//         characterCount = 0;
//     }
//     return 'All characters are repeating';
// }

// document.querySelector('#form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const forminput = document.querySelector('#input').value;
//     console.log(forminput)
//     document.querySelector('#result').innerHTML = nonRepeatingCharacter(forminput);
// })

// const form = document.getElementById("algoForm");
// const userInput = document.getElementById("userInput");
// const outputDiv = document.getElementById("output");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const text = userInput.value;
//   const status = getNonRepeatingChar(text.replace(/ /g, ""));

//   // add the non repeating character to the output div
//   outputDiv.innerHTML =
//     status.length !== 1
//       ? status
//       : `The first none repeating character is <span class="answer">${status}<span>`;
// });

// /**
//  * function to return the first none repeating character in a string and return it or return not found warning
//  * @param {string} text
//  * @returns {string} answer
//  */
// function getNonRepeatingChar(text) {
//   // initialize the hashmap
//   const hashMap = new Map();

//   // loop through the string and count occurences of each character and insert into our hashmap
//   for (const char of text) {
//     const current_characters_value = hashMap.get(char);
//     if (current_characters_value === undefined) {
//       // if string has not been counted already
//       hashMap.set(char, 1);
//     } else {
//       // else if we already have the sting in our hashmap
//       hashMap.set(char, current_characters_value + 1);
//     }
//   }

//   for (const [key, value] of hashMap) {
//     // loop through the hashmap and return the key with value of 1
//     if (value === 1) {
//       return key;
//     }
//   }

//   return "No none repeating character";
// }
// let string = "This is a test!";
// const alternatingSplit = (string)=> {
//     let evenString = ''; 
//     let oddString = '';
//     let result;
//     for (let i = 0; i < string.length; i++) {
//         //check if index is even
//         if(i % 2 === 0){
//             evenString += string[i];
//         }else{
//             oddString += string[i];
//         }
//     }
//     return oddString + evenString;
// }

// let result = alternatingSplit(string);

// // console.log(alternatingSplit("This is a test!"));

// let n = 5;
// let finalResult;

//  for(let j = 1; j<n; j++){
//         finalResult = alternatingSplit(result);
//         result = finalResult;
// }
// if(n = 1){
//     finalResult = result; 
// }

// let str = '[“book”, 3, “pin”, 3.5]';


// const objectify = str => {
//     let res = str.split(",");
//     let letterNumber = /^[0-9a-zA-Z.]+$/;
//     let temp = ''
//     let array = [];
//     for (let i = 0; i < res.length; i++) {
//         for (let j = 0; j < res[i].length; j++) {
//             if (res[i][j].match(letterNumber)) {
//                 temp += res[i][j];
//             }

//         }
//         array.push(temp)
//         temp = '';
//     }
//     let numbers = [];
//     let strings = [];
//     let booleans = [];
//     let dictionary = {};
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === "true") {
//             booleans.push(true);
//         }
//         if (array[i] === "false") {
//             booleans.push(false);
//         }
//         if (!isNaN(array[i])) {
//             numbers.push(parseFloat(array[i], 10));
//         }
//         if (isNaN(array[i]) && array[i] !== "true" && array[i] !== "false") {
//             strings.push(array[i]);
//         }
//     }
//     if (strings.length > 0) {
//         dictionary.string = strings;
//     }
//     if (numbers.length > 0) {
//         dictionary.number = numbers;
//     }
//     if (booleans.length > 0) {
//         dictionary.boolean = booleans;
//     }
//     return JSON.stringify(dictionary);
// };

// console.log(objectify('[“book”, 3, “pin”, 3.5, true, false]'));

// document.querySelector('#form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const forminput = document.querySelector('#input').value;
// //   console.log(forminput);
// //   console.log(JSON.parse(forminput));
//     document.querySelector('#result').innerHTML = JSON.stringify(objectify(forminput));
// })

// let test = ["number":[4,5]]
//         localStorage.setItem('saved', test);

// // let test = "[{"number":[4,5]}]"
// console.log(JSON.parse(test));

// let str = '[“book”, 3, “pin”, 3.5]';
// let res = str.split(",");
// let letterNumber = /^[0-9a-zA-Z.]+$/;
// let temp = ''
// let newArr = [];

// console.log(res);
// for (let i = 0; i < res.length; i++) {
//     for (let j = 0; j < res[i].length; j++) {
//         if (res[i][j].match(letterNumber)) {
//             temp += res[i][j];
//         }

//     }
//     newArr.push(temp)
//     temp = '';
// }

// console.log(newArr);

// console.log(!isNaN("9.0"));

let arrayString = "['car', 'yam', 3, 2, 5.2]"
let splitString = arrayString.split(",");
console.log(splitString);

var letterNumber = /^[0-9a-zA-Z.]+$/;
let temp = ''
let array = [];


for(let i = 0; i < splitString.length; i++){
    for(let j = 0; j < splitString.length; j++){
        if(splitString[i][j].match(letterNumber)){
            temp = temp + splitString[i][j]
        }
    }
    array.push(temp);
    temp = '';
}

console.log(array);