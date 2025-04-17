//Task #1

function processData(num1 = 0, num2 = 0, action = "sum") {
    switch (action) {
      case "sum":
        return num1 + num2;
      case "product":
        return num1 * num2;
      case "square":
        return Math.pow(num1, num2);
      default:
        return "Invalid action";
    }
  }
  
  console.log(processData(10, 4, "product")); 
  console.log(processData(2, 3, "square"));   
  console.log(processData());                

//Task #2

function findElem(arr, el) {
    return arr.includes(el);
  }
  

  const arr = [1, 2, 3, 4, "Alex", 10, "Nick"];
  
  console.log(findElem(arr, 7));       // false
  console.log(findElem(arr, "Alex"));  // true

  //Task #3

  function deleteItem(arr, item) {
    return arr.filter(element => element !== item);
  }
  
  console.log(deleteItem([3, 12, 16, 19, 21, 33], 16)); 
  // [3, 12, 19, 21, 33]

  //Task #4

  function getCircleLength(r) {
    if (typeof r !== "number" ||  r <= 0 || isNaN(r) ) {
      throw new Error("Incorrect radius - please, enter a positive numeric value!");
    }
    return 2 * Math.PI * r;
  }
  
  // Пример использования:
  try {
    const length = getCircleLength("five");
    console.log("Circle length:", length);
  } catch (error) {
    console.log(error.message);
  }

  //Task #5

  function checkID() {
    try {
      const input = prompt("Please enter your ID:");
  
      if (input === "") {
        throw new Error("The field is empty! Please enter your ID.");
      }
  
      const id = Number(input);
  
      if (isNaN(id)) {
        throw new Error("Invalid input! ID must be a number.");
      }
  
      if (id < 1 || id > 1000) {
        throw new Error("ID must be between 1 and 1000.");
      }
  
      alert("Your ID is valid. Thank you!");
    } catch (error) {
      alert(`Error: ${error.name}\nDescription: ${error.message}`);
    }
  }
  
  // Для теста:
  checkID();