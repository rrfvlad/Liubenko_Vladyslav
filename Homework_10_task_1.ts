
function display(message: string): void;
function display(message1: string, message2: string): void;
function display(messages: string[]): void;


function display(arg1: string | string[], arg2?: string): void {
    if (typeof arg1 === "string" && typeof arg2 === "undefined") {
       
        console.log(arg1);
    } else if (typeof arg1 === "string" && typeof arg2 === "string") {
      
        console.log(arg1);
        console.log(arg2);
    } else if (Array.isArray(arg1)) {
      
        arg1.forEach(str => console.log(str));
    } else {
        console.error("Неправильні аргументи.");
    }
}


display("Hello, World!");      
display("Hello", "World!");      
display(["Hello", "World", "!"]); 