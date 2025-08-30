var a = 10;
var b = 20;

try {console.log(a+b);
}catch(err){
console.log("The line is never reached")
console.log(" There was an error")
}
console.log("My program doesn't stop")

/* in this code if the a and b doesnt
initialize then the result inside the try 
and catch block will run

but in this case the a and b is initialize
with the value 10 and 20 so it wont throw
an error and run the addition and code
"my progran doesn't stop also print"

*/