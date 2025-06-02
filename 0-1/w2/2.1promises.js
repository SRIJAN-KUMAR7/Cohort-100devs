/*
promises are syntactical sugars just: to make this happen 
 it is just a class that makes callbacks and async functions slightly more readable 
//whenever we create it you need to pass in a fnctin as the first argument 
//which has a resolve as the first argument 
// the asyn feature u wantt to give goes to resolve function 
// .then is called whenever the async function resolves 


we use this to make our own function but we use the well defined functions like 
setTimeout and the Readfile etc just to make a wrapper and say that this is our 
ASYNC function but its not 

in simple we just wrap around the other async functions

*/

function myOwnSetTimeout(fn,duration){
   setTimeout(fn,duration);
}

myOwnSetTimeout(function(){
    // console.log("hi there by setTimeout")
},3000)
// console.log("hi there srijan is learning promises")



/* this is a good way of using call backs but could lead to Call back hell 
  


What if i tell you -
  create a function that logs something after 1 seconds 
  and then waits for 2 seconds to log another thing 
*/

setTimeout(function(){
    // console.log("hi there after 1 seconds");
    setTimeout(function(){
        // console.log("hi there after 2 seconds")
        setTimeout(function(){
        // console.log("hi there after 3 seconds")
    },3000)
    },2000)
},1000)


// but this can go to call back hell(unecessary indentation) .. there is a very bad nesting  here 
//Promises 


function myownsetTimeout(duration){
     let p =new Promise(function(resolve){
        //after 1 seconds
        setTimeout(resolve,duration);
     });
     return p;
}
myownsetTimeout(1000)
    .then(function(){
        // console.log("log this after promise")
    })


function pormisifiedMyOwnSetTimeout(duration){
    const p=new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },duration)
    });
    return p;
}

//promise to get rid of =>callback
const ans=pormisifiedMyOwnSetTimeout(1000);
ans.then(function(){
    // console.log("hello world timeout is done")
})


//calling a async function and then putten .then is valid 

//when wwe are going to usse this async  calls 
//do a network call
//aleep /wait for some time
//read a file
//database call

//5%=>async calls 


//consider an example 

/*fs=require('fs');
fs.readFile("a.txt","utf-8").then(function(err,data){

})
.catch(function(err){

})*/

// this is a high level example which we will be using 

let n=new Promise(function(resolve){
    // resolve();--> promise state pending
    resolve()///promise state undefined 
    // console.log(n)
})
// console.log(n)

// everything related to state of the promise 
// A Promise in JavaScript is an object representing the eventual completion (or failure) of an asynchronous operation.

// A Promise has three states:

// pending – Initial state, neither fulfilled nor rejected.

// fulfilled – Operation completed successfully.

// rejected – Operation failed.

//  Promise Rejected State
// When a Promise fails, it enters the rejected state.

//  Example: Manually Rejecting a Promise
// let promise = new Promise((resolve, reject) => {
//     reject("Something went wrong!");
// });

// promise.then((data) => {
//     console.log("Success:", data);
// }).catch((error) => {
//     console.log("Error:", error);  // this runs
// });

function myasyncfn() {
    const p = new Promise(function(resolve) {
        // Simulating async operation (e.g., API call, file read)
        setTimeout(() => {
            resolve("hi there i now know async calls in js");
        }, 1000); // 1 second delay
    });
    return p;
}

// To get rid of callback hell we use async/await
async function main() {
    try {
        const value = await myasyncfn();
        console.log("Value from myasyncfn:", value);
    } catch (error) {
        console.error("Error caught in main:", error);
    }
}

main();  // Call the main function

 