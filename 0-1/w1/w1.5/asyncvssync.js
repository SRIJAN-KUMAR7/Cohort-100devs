// Asynchronous vs shynchronous functions 
// real uses of callbacks
// js browser architecture 
// promises 
// async await  

// synchronous programming: together one after other ,sequential ..or only one thing is happening at a time 


//asynchronous programmins :
//opposite of synchronous .. happens in parts 
//multiple things ate context switching with each other

//tasks happen parellely
//cooking maggie while listening music or cutting vegetables 

///example  to consider
//human brain and body is single threaded 
// 1.we can do one thing at a time 
// 2.but we can context swich bettweeen tasks , or we can delegate the tasks to other people 

// lets say we have 4 tasks 
// 1. boil water 
// 2.cut vegetables 
// 3.unwrap maggie 
// 4 puts sauce 

// but if we do it sequentially time taken assume =20 minutes 
// but if paralliaed the tasks and context switching happens 
//  and did asynchronous way we can do it in 
// 5 min


//untill now we have seen only SYNCHRONOUS functions 

// eg:

function findSum(n){
    let ans =0;
    for(let i=1;i<=n;i++){
        ans+=i;
    }
    return ans;
}

function findSumtill100(){
   console.log( findSum(100));
}

//let us intoduce ASYNCHronous functions 

setTimeout(findSumtill100,1000)//async function --> this is like delegating the task to some other person 
console.log("Hello world")//this will get printed after that async works

//output:
// Hello world
// 5050


// function syncsleep(){
//     let a=1;
//     for(let i=0;i<10000000000;i++){
//   a++;
//     }
// }
// syncsleep();
// setTimeout(findSumtill100,1000)
// console.log("Hello World")


//what are common async functions
// setTimeout fs.readFile, fetch --> fetch some data from any api