//Task #1

let inputValue = 22;

let minutes = inputValue % 60;
let hours = parseInt(inputValue / 60);
console.log("Time is:", hours,":", minutes );

//Task #2


let a = parseFloat(prompt("Would you be a lamb and insert the first number for me here, please?"));
let b = parseFloat(prompt("Would you be a lamb and insert the second number for me here, please?"));

    // Обчислення
    let sum = a + b;
    let difference = (a - b); 
    let product = a * b;
    let quotient = b !== 0 ? a / b : "Ділення на нуль неможливе";
    // Вивід результатів
    alert("Sum is: " + sum);
    alert("Differnce is: " + difference);
    alert("Product is: " + product);
    alert("Qoutient is: " + quotient);










