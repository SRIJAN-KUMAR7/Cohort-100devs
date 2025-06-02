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
        console.log("log this after promise")
    })


