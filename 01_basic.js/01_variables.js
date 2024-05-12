const accountId=144553
let accountEmail="shubham5640@gmail.com"
var accountPassword="12345"
accountCity="bagaha"
let accountState;

//accountId=2  not allowed
accountEmail="look@gmail.com"
accountPassword="99995"
accountCity="bengaluru"

console.log(accountId);

/*
prefer not to use var 
because of issue  in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])