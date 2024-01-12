{

try {
    console.log("LetVariable:", x); // This will result in a ReferenceError
  } catch (error) {
    console.error("ReferenceError for letVariable:", error.message);
  }


try {
    console.log("const Variable:",y); // This will result in a ReferenceError
  } catch (error) {
    console.error("ReferenceError for Const Variable:", error.message);
  }
console.log(z);


let   x = "Sraban";
const y = "Amin";
var   z = "Saswat";

console.log(x);
console.log(y);
console.log(z);

 }

// {
//     console.log("Before declaration:");
    
//     // Variable hoisting for var
//     console.log("VarVariable:", varVariable); // Output: undefined
//     var varVariable = "I am a var";
  
//     // Variable hoisting for let and const
//     try {
//       console.log("LetVariable:", letVariable); // This will result in a ReferenceError
//     } catch (error) {
//       console.error("ReferenceError for letVariable:", error.message);
//     }
  
//     try {
//       console.log("ConstVariable:", constVariable); // This will result in a ReferenceError
//     } catch (error) {
//       console.error("ReferenceError for constVariable:", error.message);
//     }
  
//     // Variable assignments
//      var varVariable = "i am var";
//     let letVariable = "I am a let";
//     const constVariable = "I am a const";
  
//     console.log("\nAfter declaration:");
    
//     // Log values after declaration
//     console.log("VarVariable:", varVariable); // Output: Var value changed
//     console.log("LetVariable:", letVariable); // Output: I am a let
//     console.log("ConstVariable:", constVariable); // Output: I am a const
//   }
  