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

