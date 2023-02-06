/*
Are Higher Order functions and Call back functions the same ? If not,
briefly explain about both functions.
*/

//higher Order functions
/*
A higher order functionis a function that accepts functions as parameters and / or returns a function.
first() is the Higher Order function in this example
*/
function first(){
    console.log("first");
    return function(){
        console.log("second");
    };
}
let result = first();
result();

//call back
/* call back function can run after another function has finished.
    we don't need to manually call the function in call back.
    function name is also not important and we can use arrow function 
*/ 

setTimeout(()=>{
    console.log("i am Call Back function");
},5000)



