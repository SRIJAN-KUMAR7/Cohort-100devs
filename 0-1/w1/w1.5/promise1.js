var d= new Promise(function(resolve){
  setTimeout(function(){
    resolve("foo")
  },1000)
});

function callback(){
    console.log(d);
}
d.then(callback)

//Promise {undefined}
//Promise {'foo'}


var d= new Promise(function(resolve){
  setTimeout(function(){
    resolve("foo")
  },1000)
});

function callback(){
    console.log(d);
}
console.log(d)
d.then(callback)

//what is a promise 
// it is just a class that makes callbacks and async functions slightly more readable 
//whenever we create it you need to pass in a fnctin as the first argument 
//which has a resolve as the first argument 
// the asyn feature u wantt to give goes to resolve function 
// .then is called whenever the async function resolves 


