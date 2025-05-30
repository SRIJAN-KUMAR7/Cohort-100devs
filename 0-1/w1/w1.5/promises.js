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
