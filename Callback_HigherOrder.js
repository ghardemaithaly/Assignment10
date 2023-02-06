/*3. Give an example of a Higher Order function and a call back function
used in the same program.
*/

//Higher Order
//Here add function is the Higher Order Function

//call back
//here handle function is call back function

function add(a,b, handle)
{
    let result = a+b;
    handle(result);
}
function print(result){
    console.log("Printing",result);
}

add(4,5,print);