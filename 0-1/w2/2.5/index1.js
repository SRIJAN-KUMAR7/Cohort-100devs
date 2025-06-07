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


//popular way to send the inputs for get request 
//query pararmeter
app.get('/',function(req,res){
        //write the logic here 
        const johnKidneys=users[0].kidneys;
        // console.log(johnKidneys)
        const numberOfKidneys=johnKidneys.length;
        let numberOfHealthyKidneys=0;
        //filter method --> we will learn this 
        for(let i=0;i<johnKidneys.length;i++){
            if(johnKidneys[i].healthy){
                numberOfHealthyKidneys=numberOfHealthyKidneys+1;
            }
        }
        const numberOfUnhealthyKidneys=numberOfKidneys-numberOfHealthyKidneys;
        //isme input that re.query.n 

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
    
        // const numberOfHealthyKidneys=kidneys.filter
})

app.use(express.json());
app.post('/',function(req,res){
      //User can add a new unhealthy kidney 
    // in post req  we send the request or  input in form of  BODY
    const isHealthy=req.body.isHealthy;
    // console.log(isHealthy)
    users[0].kidneys.push({
        healthy:isHealthy
    })

    res.json({
        msg:"Done !"
    })
// but i was able to send only get request from here how can i send the post request 
// can be done through postman and using middleware bodyparser or app.use(epxress.json()); 
})

app.put('/',function(req,res){
    //modifying the data
    //reseting that every kidney present there is healthy
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }

    res.json({});
    // this makes the number of unhealthy kidneys =0
})


app.delete('/',function(req,res){

    // if there are already no unhealthy kidnneys why will we delete 
    // infact it should use the status code 411--> wrong inputs 
    if(isThereAtleastOneUnhealthyKidney()){
    const newKidneys=[];
    for(let i=0;i<users[0].kidneys.length;i++){
    if(users[0].kidneys[i].healthy){
        newKidneys.push(
            {
                healthy:true
            }
        )
    }

    
 users[0].kidneys=newKidneys;
//  console.log(users[0].kidneys);
 res.json({
    msg:"done bro"
 })
 }
    }
    else{
        // res.sendStatus(411);
        res.status(411).json({
                msg:"You have no bad kidneys"
        });
    }
// to remove all the unhealthy kidneys 

})

 function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney=false;
 for(let i=0;i<users[0].kidneys.length;i++){
      if(!users[0].kidneys[i].healthy){
       atleastOneUnhealthyKidney=true;   
    }
 }
 return atleastOneUnhealthyKidney;
 }

app.listen(3000,()=>{
console.log(" app is running on 3000")
})

// hospital game backend complete 



