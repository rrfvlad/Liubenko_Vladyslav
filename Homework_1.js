//Task #1

let inputValue = 22;

let minutes = inputValue % 60;
let hours = parseInt(inputValue / 60);
console.log("Time is:", hours,":", minutes );

//Task #2


let a = parseFloat(prompt("Would you be a lamb and insert the first number for me here, please?"));
let b = parseFloat(prompt("Would you be a lamb and insert the second number for me here, please?"));

    
    let sum = a + b;
    let difference = (a - b); 
    let product = a * b;
    let quotient = b !== 0 ? a / b : "Ділення на нуль неможливе";
    

    alert("Sum is: " + sum);
    alert("Differnce is: " + difference);
    alert("Product is: " + product);
    alert("Qoutient is: " + quotient);


//Task#3

let x = 1;
let y = 2;

let res1 = x.toString() + y.toString();
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x) + y.toString();
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x < y;
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = x - "hello";
console.log(res4); // NaN
console.log(typeof res4); // "number"

//Task #4

let score = 98;
    if (score >= 0 && score <= 49) {
        console.log("Unsatisfied!");
    } else if (score >= 50 && score <= 70) {
        console.log("Satisfied!");
    } else if (score >= 71 && score <= 87) {
        console.log("Good!");
    } else if (score >= 88 && score <= 100) {
        console.log("Excellent!");
    } else {
        console.log("Incorrect assessment!!");
    }


let score1 = 99;
    switch (true) {
        case (score1 >= 0 && score1 <= 49):
            console.log("Unsatisfied!");
            break;
        case (score1 >= 50 && score1 <= 70):
            console.log("Satisfied!");
            break;
        case (score1 >= 71 && score1 <= 87):
            console.log("Good!");
            break;
        case (score1 >= 88 && score1 <= 100):
            console.log("Excellent!");
            break;
        default:
            console.log("Incorrect assessment!!");
    }


//Task #5

for(let i = 1; i<=50; i++){
    let output=i;
    
    if(i % 4 == 0){
        output +="kratne 2 & 4!";
    } else if (i % 2 ==0) {
        output += "kratne 2!";

    }
    console.log(output)
}






