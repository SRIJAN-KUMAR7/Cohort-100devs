/* this was the example and understand the query parameters
const express=require("express");

const app =express();


function sum(n){
    let ans=0;
    for(let i=0;i<=n;i++){
        ans+=i;
    }
    return ans ;
}

//req and res => request and response
app.get('/',function(req,res){
    const n=req.query.n;
    const ans=sum(n);
    res.send("hi there Your ans is "+ ans);
})
app.listen(3001,console.log("running on 3001"));
*/





/*THEORY




 WHAT is a REQUEST methods?

 1.GET-> Going for a consultation to get a checkup ..like asking sum till 100
 2.POST->Going to get a new kidney inserted ..instagram post similiar 
 3.PUT-> Going to get a Kidney replaced 
 4.DELETE-> Going to get a Kidney removed 

Status Codes -->
1.200->Evereything went fine 
2.404-> DOctor is not at the hospital
3.500-> Mid surgery light went away  -> or when we throe new Error("anything") --> status code will be 500
4.411-> Inputs were incorrect wrong person came to surgery
5.403->you were not allowed in the hospital





ASSIGNMENT:
Now lets make a in memory hospital 
here in memory means we are not going to use any database here
we will bw just uisng the variables 
we need to create a 4 routes (4 things that a hospital can do)


1.GET->User can check how many kidneys they have and their health
2.POST-> user can add a new kidney
3.PUT->user can replace a kideny make it healthy
4.DELETE-> User can remove a kidney
*/

/*
nesting objects  : there is no limit 
var users=[{
    name:"srijan kumar",
    metadata:{
        profilepicture:"",
        pronouns:"he/him",
        address:{

        }
    }
}]
*/


const express= require("express")
const app= express();

const user={
    name:"John",
    kidneys:[{
        healthy:false
    },
    {
        healthy:true
    }
]}

const users=[user];// one user for now

app.get('/',function(req,res){
        //write the logic here 
        const johnKidneys=users[0].kidneys;
        const numberOfKidneys=kidneys.length;
        //filter method 
        // const numberOfHealthyKidneys=kidneys.filter
})


app.post('/',function(req,res){

})

app.put('/',function(req,res){

})


app.delete('/',function(req,res){


})


app.listen(3000,()=>{
console.log(" app is running on 3000")
})