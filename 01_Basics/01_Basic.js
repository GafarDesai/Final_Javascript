//Declaring variable..............Single line comment
const accountID = 1234
let accountEmail = "gmsd@gmail.com"
var accountPassword = "gmsd1126"
state = "Maharashtra"

//Printing variables
console.log(accountID);

/*.................Multiline comment
Now printing multiple varible at a time using console.table([var1,var2,...,varn])
*/

/*
Prefer not to use var variable
because due to functional and block scope
*/
console.table([accountID,accountEmail,accountPassword,state])

//Without value assign to variable give "undefine" output
let location;

console.table([accountID,accountEmail,accountPassword,state,location])

