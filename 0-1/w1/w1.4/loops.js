//for loops ..
///overwhelmed in 1.2
//intutition based call backs
//too basic class

function findSum(n){
    let ans=0;
    for(let i=1;i<=n;i++){
       ans=ans+i;
    }
    return ans;
}

//callbacks ;;jarring concept

// step1 :can we call one function inside another 




// function sumsquare(a,b){
//     let ans1=square(a);
//     let ans2=square(b);
//     return ans1+ans2;
// }
// console.log(sumsquare(1,2))

//callbacks -->passuing function as an argument of some other function is called call backs 


function square(n){
    return n*n;
}

function sumofsomethihng(a,b,fn){
     const val1=fn(a);
     const val2=fn(b);
     return val1+val2;
}
// sumofsomethihng(a,b,square);
console.log(sumofsomethihng(1,3,square));
   

// in javascripts the argument can be number string array or a function that is something wierd 


//anonymous functions
//rather than defininyig the fn outside the callback function we can inside the call statements

function sumofsomethihng(a,b,fn){
     const val1=fn(a);
     const val2=fn(b);
     return val1+val2;
}
console.log(sumofsomethihng(2,2,function cube(n){
    return n*n*n;
}));
//defining the function inside the call statements and this will not be used anywhere 
