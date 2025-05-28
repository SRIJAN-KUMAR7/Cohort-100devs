function findsum (a,b,fntocall){
    let res=a+b;
    fntocall(res);
}
// let a=10;
// let b=19;
// console.log(findsum(a,b));
  
function displayResult(data){
    console.log("Result of the sum is",+ data);
}

function displayResultPassive(data){
    console.log("Sum's result is :" + data)
}

//we can call only one function in this 
//to calculate the sum and display result but we have two functions 
//but inorder to make it a single function call we need to add the display fuinction inside the sum function 
//and it works
//one tricky part if we donot have to change anything inside the function definition how can we achieve that 
const ans=findsum(1,2,displayResult);

// afunction goes as an argument inside the function 
//passing functoin as an arhgument is callbacks
//CALLBACK
function calculateArithmetic(a,b,arithmeticFinalFunction){
  const ans=arithmeticFinalFunction(a,b);//this is same as defininf a sum function inside the function
  return ans;
}
function sum (a,b){
    return a+b ;
}
function minus(a,b){
    return a-b ;
}
const value=calculateArithmetic(1,1,sum);
console.log(value)


//SETTIMEOUT 
// even this is a call back
function greet(){
    console.log("HELLO WORLD");
}
function greetAlien(){
    console.log("hello alien");
}
setTimeout(greetAlien,3*1000);
//setinterval 
setInterval(greetAlien,1*1000);