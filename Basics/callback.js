//callbackfunction
function mydisplay(some){
    console.log(" sum",some);

}
function myfunction(num1,num2,cb){
    console.log("sum function called")
let sum= num1+num2;
cb(sum);
}

myfunction(78,4,mydisplay);