//2. Is filter a Higher Order function in Javascript ? If yes, why ?


/*yes filter is a higher Order Function
In functional  programming ,filter is a higher-order function that processes a data structure in 
some order to produce a new data structure containing exactly those elements of the original data structure
for which a given returns the boolean value true.
*/

const users =[
    {name:'Maithali',status:true},
    {name:"Ineuron", status:false},
];
const Admin = users.filter(user =>user.status==true);
console.log(Admin);
