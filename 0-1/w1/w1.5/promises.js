// timmy gives some task to simmy and a callback function
// does the tasks and she puts the result  in callbackqueue
// then the eventloop picks it and then timmy will finally execute the call back function

function findSum(n){
    let ans =0;
    for(let i=0;i<=n;i++){
        ans+=i;
    }
    return ans;
}

function findSumtill100(){
    console.log(findSum(100));
}

setTimeout(findSumtill100,1000);
console.log("hello world ..and i will go first ")

//output
// hello world ..and i will go first 
// 5050


//but this code is ugly and
// /promises are syntactical sugar that make this code more 
// readable

//untill now we have used other functions asynchronous functions 
//how can we create our own async function


const fs=require('fs');

function srijanreads(cb){
  fs.readFile("a.txt","utf-8",function(err,data){
          cb(data);
      }
  )
}


function onDone(data){
  console.log(data);
}
srijanreads(onDone);

//same output as the previous one
// hi there i am srijan kumar using file sysytems using javascripts

//this is just a wrapper of the previous function we have already 
//used.Usually all async functions we will write 
//will be using js provided async functions like 
//setTimeout or fs.readFile()


// to make this look more readable we use PROMISES 
///without calling cb (callbacks )we can use promises and 
//get rid of ugly cb-->callback hell

// this is the code 

const fs=require('fs');

//my own call back function
function srijanreads(){
  return new Promise(function(resolve){
      fs.readFile("a.txt","utf-8",function(err,data){
              resolve(data);
          });
  })
}

//callback  function to call

function onDone(data){
  console.log(data);
}
  
srijanreads().then(onDone);

//same output as above 
//syntax for promise 
// function async(){
// return new Promise(function(resolve){

// })
// }


//inmore detail 
const fs=require('fs');
const { MdPending } = require('react-icons/md');

//my own call back function
function srijanreads(){
  console.log("inside srijanreads")
  return new Promise(function(resolve){
      console.log("inside promise")
      fs.readFile("a.txt","utf-8",function(err,data){
          console.log("before resolve");
              resolve(data);
          });
  })
}

//callback  function to call

function onDone(data){
  console.log(data);
}
  
let a=srijanreads();
a.then(onDone);


// inside srijanreads
// inside promise
// before resolve
// hi there i am srijan kumar using file sysytems using javascripts

//promise is just a class 
//as we have used the new keyword 
//new Date ()-->remember 



//  we can write 

//  const d = new Promise();



//  but we will have to write the function inside so that we prevent this 
//  error message 
// /home/runner/workspace/index.js:1
// const d=new Promise();
//         ^

// TypeError: Promise resolver undefined is not a function
//     at new Promise (<anonymous>)
//     at Object.<anonymous> (/home/runner/workspace/index.js:1:9)
//     at Module._compile (node:internal/modules/cjs/loader:1546:14)
//     at Object..js (node:internal/modules/cjs/loader:1689:10)
//     at Module.load (node:internal/modules/cjs/loader:1318:32)
//     at Function._load (node:internal/modules/cjs/loader:1128:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:315:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:170:5)
//     at node:internal/main/run_main_module:36:49

// Node.js v22.10.0


const d=new Promise(function(resolve){
  
});

console.log(d)


//output
// Promise<pending>\


// a promise has 3 states 
// pending 
// resolved 
// rejected 


