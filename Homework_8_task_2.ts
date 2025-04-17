function processData2(param: string | number | boolean | number[]): string | number | boolean | number[] {
    if (typeof param === "string") {
      return param.toUpperCase();
    }
  
    if (typeof param === "number") {
      return param * param;
    }
  
    if (typeof param === "boolean") {
      return !param;
    }
  
    if (Array.isArray(param)) {
      if (param.length === 0) {
        return "Empty array: []";
      }
  
      return param.map((num) => num * num);
    }
  
    throw new Error("Unsupported data type");
  }
  
  
  console.log(processData2("text data")); // "TEXT DATA"
  console.log(processData2(3));           // 9
  console.log(processData2(false));       // true
  console.log(processData2([1, 2, 3, 4])); // [1, 4, 9, 16]
  console.log(processData2([]));          // "Empty array: []"