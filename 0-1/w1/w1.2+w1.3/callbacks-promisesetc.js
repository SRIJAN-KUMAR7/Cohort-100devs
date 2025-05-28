//callback functions | event loops and callback queues
///synchronous and asynchronous functions 

const { CgLayoutGrid } = require("react-icons/cg");

let start = Date.now();
setTimeout(a,1000);
 function a(){
    let end = Date.now();
    console.log("Elapsed time (ms):", end-start);
 }

 function getlength(str){
    console.log("original string:"+str);
    console.log("Length "+str.length)
//string functions already present in js already
 }
 getlength("Srijan Kumar")

 function findIndexof(str,target){
      console.log(str);
      console.log("index :"+ str.indexOf(target));
 }
 findIndexof("srijan kumar","kumar");

 function findIndexof(str,target){
      console.log(str);
      console.log("index :"+ str.lastIndexOf(target));
 }
 findIndexof("Hello World World World","World");

//length not a function ,lastindexof ,indexof

function getSlice(str,start,end){
   console.log("original string"+ str);
   console.log("After slicing:"+ str.slice(start,end));

}
getSlice("Hello World",0,5)//goes till 4
//substr depreciated

//examples for both of them
console.log("srijan kumar".slice(1,5))
console.log("srijan kumar".substr(1,5))

//rija
//rijan
// there is difference in the output because substr goes from start to chacter 5 and in slice it goes from start to end -1

function cutIt(str,start,end){
   let newstr="";
   for(let i=0;i<str.length;i++){
      if(i>=start && i<=end){
         newstr+=str[i];
      }
   }
   return newstr;
}
let ans=cutIt("srijankumar",1,8);
console.log(ans)

 function replaceString(str,target,replacement){
   console.log("Original string",str);
   console.log("After Replacement:",str.replace(target,replacement));
 }
 replaceString("Hello World","World","Javascript")
 replaceString("Hello World","He","Javascript")

 function splitSring(str,Separator){
    console.log("original String",str);
    console.log("After split:"+str.split(Separator));}

splitSring("Srijan Kumar","*");
const value="hi my name is srijan kumar";
const words=value.split(" ");
const words1=value.split("h");
const words2=value.split(",");
console.log(words);
console.log(words1);
console.log(words2);
// this gives an array [ 'hi', 'my', 'name', 'is', 'srijan', 'kumar' ]
//split method splits on the basis of delimiter
//[ 'hi', 'my', 'name', 'is', 'srijan', 'kumar' ]
// [ '', 'i my name is srijan kumar' ]
// [ 'hi my name is srijan kumar' ]


//TRIM--//removes the starting and ending white spaces
const vale="  srijan kumar  ";
console.log(vale.trim())
const x=vale.toUpperCase();
console.log(x);
console.log(x.toLowerCase());

//NUMBER FUNCTIONS
//parseInt --->Global function
console.log(parseInt("42"));
console.log(parseInt("42px"));
console.log(parseInt("3.14"));
//42
// 42
// 3
 console.log(parseFloat("3.34nfskf"))
 //3.34

 //Arrays
const initial_array=[1,2,3];
initial_array.push(78);
console.log(initial_array)
initial_array.pop();
console.log(initial_array)
initial_array.pop();
console.log(initial_array)
//to deletefrom front of thearray
initial_array.shift();
console.log(initial_array)
initial_array.unshift("srijan")
console.log(initial_array)
//all outputs
//[ 1, 2, 3, 78 ]
// [ 1, 2, 3 ]
// [ 1, 2 ]
// [ 2 ]
// [ 'srijan', 2 ]
// Elapsed time (ms): 1010

