// Simple primitives 

var a=2;
a=1;
let b=2;
b=9;

console.log("Hello world");
console.log(a);
console.log(b);
const c=10; // to make the value constant in overall of the program
// c=0; // interpreted js language 
console.log(c);

//data types
let Firstname="srijan kumar";
let age =18;


console.log("name of the person is "+ Firstname + " and his age is "+age )


//if else statements
let ismarried=false;
if(ismarried){
    console.log(Firstname+" is married");
    
}
else{
    console.log(Firstname+" is Not Married");
    
}// we can have multiple if else statements 

//loops in java script
let s =0;
for(let i=0;i<=1000;i++){
    s=s+i;
}
console.log(s)
//complex primitives -->array and objects

const person=["srijan","kumar","virat","kohli"];
console.log(person[0]+person[3]);

const umr=[11,12,14,24,13,45,66,7,8,78];
const even=[];
let j=0;
for(let i=0;i<umr.length;i++){
    if(umr[i]%2==0){
        even[j]=umr[i];
        j++;
    }
}
console.log(even)

let numbers=[1,23,44,55,656,77,888,999,3333]
let max=0;
for(let i=0;i<=numbers.length;i++){
    if(numbers[i]>max){
        max=numbers[i];
    }
}
console.log(max);