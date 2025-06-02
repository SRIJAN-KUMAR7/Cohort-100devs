//revison classes for async 
// this is the revision class 

/* Call backs*/


function square(n){
    return n*n;
}
function cube (n){
    return n*n*n;
}

function sumOfSquare(a,b){
    let square1=square(a);
    let square2=square(b);
    return square1+square2;
}

function sumOfCubes(a,b){
    let c1=cube(a);
    let c2=cube(b);
    return c1+c2;
}

let ans=sumOfSquare(1,2);
// console.log(ans)
let ans1=sumOfCubes(1,2);
// console.log(ans1)

//but this is repeating and which violates the DRY principle that is Donot repeat Yourself

//so lets make a generic function
function sumofsomething(a,b,fn){
      let val1=fn(a);
      let val2=fn(b);
      return val1 + val2 ;
}
let finalans=sumofsomething(1,2, square)//functional arguments passed 

console.log(finalans);

// made the function generic

//async functions 
/* we have only discussednormal functions and js is single threaded 
there are some tasks it needs to wait for -- some tasks like 
1> reading a file 
2> sending a network request 
3> a deliberate timeout 

1>reading a file 
function onDone(content){
    console.log(content);
}
readFile("a.txt",onDone)//async call
//setTimeout
console.log("hi there")

usomg SetTimeout 
function onDone(){
    console.log("hi there")
}

setTimeout(onDone,1000)//in ms
console.log("after setTimeout")


*/


 