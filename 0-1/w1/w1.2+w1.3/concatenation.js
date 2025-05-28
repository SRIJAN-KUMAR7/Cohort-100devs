//concatenation properties 
const a=[1,2,3];
const b=[4,5,6];
console.log(a.concat(b));
//can be done  
for(let i=0;i<b.length;i++){
    a.push(b[i]);
}
console.log(a)
//push has second argument as a number 
//concat has second arg as array
const A=[1,2,3];

function logThing(str){
    console.log(str );
}
//[1,2,3]
A.forEach(logThing)
//similiar to doing
// logThing(1)
// logThing(2)
// logThing(3)


//callbacks
function log1(){
    console.log("hello world1");
}
function log2(){
    console.log("hello world2");
}
function whateverpresent(fn){
    fn();
}

whateverpresent(log2);

//map filter find sort functions in array
//will bw covering later 
