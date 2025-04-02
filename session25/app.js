// Task 1: Basic Counting Loop (For Loop)

function countDownFrom(n){
    for (let i = n; i > 0; i--) {
        console.log(i); 
    }
}

countDownFrom(5);

// Task 2: Iterate Over an Array (For...of Loop)

function printArrayElements(arr){
    for (const fruits of arr) {
        console.log(fruits);
    }
}
printArrayElements(["Apple", "Banana", "Cherry"]);

// Task 3: Sum of Numbers (While Loop)

function sumNumbersUpTo(n){
    sum = 0;
    a = 1;

    while(a <= n){
        sum += a;
        a++;
    }

    console.log(sum);
    
}
sumNumbersUpTo(5);

// Task 4: Repeat a String (Do...While Loop)

function repeatString(str, n){
    let s = 1;
    let resoult = str;
    do{
        resoult += str;
        s++;
    }while(s < n)
        console.log(resoult);
        
}

repeatString("Hello", 3);

// Task 5: Iterate Over Object Properties (For...in Loop)

function printObjectKeys(obj){
    for (const info in obj) {
        console.log(info);
    }
}
printObjectKeys({ name: "Alice", age: 25 });

// Medium tasks
// Task 1: Filter Odd Numbers (For Loop)

function filterOdds(numbers){
    let odd = [];
    
    for (const num of numbers) {
        if (num % 2) {
            odd.push(num);
        }
    }
    console.log(odd);
}
filterOdds([1, 2, 3, 4, 5]);

// Task 2: Find Maximum Value (For...of Loop)

function findMaxValue(numbers){
    let max = numbers[0];

    for(const num of numbers){
        if (num > max) {
            max = num;
        }
    }
    console.log(max);
}
findMaxValue([10, 20, 5, 30]);

// Task 3: Reverse a String (While Loop)

function reverseString(str){
    let word = "";
    let reverse = str.length - 1;

    while(reverse >= 0){
        word += str[reverse];
        reverse --;
    }
    console.log(word);
}
reverseString("Hello");

// Task 4: Validate User Input (Do...While Loop)

// function getValidInput(){
//     let number;

//     do{
//         number = prompt("Enter a number between 1 and 10:")
//     }while(number < 1 || number > 10);
//     console.log("Enter number :" + number);
    
// }

// getValidInput();

// Hard tasks
// Task 1: FizzBuzz with a Twist

function fizzBuzzTwist(){
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i.toString().includes('3')) {
            console.log("Almost Fizz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzzTwist();

// Task 2: Nested Loops: Multiplication Table

function printMultiplicationTable(n){
    for(let m = 1; m <= n; m++){
        let line = "";
        for(let l = 1; l <= n; l++){
            line += `[${m}*${l}]`;
        }
        console.log(line);
    }
}
printMultiplicationTable(5);

// Task 3: Modify Array While Looping

function removeDuplicates(arr) {
    let array = [];
    let i = 0;

    while (i < arr.length) {
        if (!array.includes(arr[i])) {
            array.push(arr[i]);
        }
        i++;
    }

    return array;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
