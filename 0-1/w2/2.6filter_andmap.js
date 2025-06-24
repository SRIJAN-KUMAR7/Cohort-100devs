//some extra concepts in js

//map filter arrow fn etc --> 
/* map and filter are helper functions when it comes to array and 
arrow fns is another way to write the function definition  */

function sum(a,b){
 return a+b;
}
const sum1=(a,b)=>{
    return a+b
}
const ans =sum1(1,3);
// console.log(ans)

// app.get('/', (req,res)=>{

// })
//just another way to define the function

//map and filter 

//given an array give me back a new array in which every number is
//multiplied by 2 the array is [1,2,3,4,5]
//output-->[2,4,6,8,10]

const input=[1,2,3,4,5];
const newarr=[];
for(let i=0;i<input.length;i++){
    newarr.push(input[i]*2);
}

// console.log(newarr);

/* MAP
const newArray = originalArray.map(callbackFn);

const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]


*/

function transform(i){
    return i*2;
}
// const asns=transform(2);
// console.log(asns)
const input1=[1,2,3,4,5];
// map(Array,transform);//[2,4,6,8,10]

const anss=input1.map(transform); // this is done ..pass a function
// console.log(anss)


/* */
const anssa=input1.map(function(i){
    return i*2;
}); 


//create a map function that takes 2 inputs 
// an array and a transformation call back func


/*FILTER */


const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

///filtering logic fun

function filteriglogic(n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}

const answer=arr.filter(filteriglogic);
console.log(answer)

const answerr=arr.filter(
function(n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}
)