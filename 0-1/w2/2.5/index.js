//real world examples to understand  EXPRESS And POSTMAN
// will also create a HTTP server 


/* Doctors have a skill
 they have acquired that skill over years 
 and they provide services to other people who want to use their skill 

 to expose the life skill they open a clinic
 People who want to use their skill line up in a waiting room
 One by One , the doctor meets with them 
 The doctor is single threaded 


 How do poeple reach the doctors ?
 They get their address and navigate to it?

 Once they reach there they wait in the waiting area 
 Doctor tends to them one by one 


 doxtor can tell them get to get the medicine and
 meanwhile he can meet his/her next patients 
 --> similiar to delegaing tasks

you come back from the medicine store and
you have to wait again in the waiting room again


Doctors are similiar to java script thread.
our code logic is like a doctor 




function calculateSum(n){
    let ans=0;
    for(let i=1;i<=n;i++){
        ans+=i;
    }
    return ans;
}
let ans=calculateSum(10);  //----> your relative using you like 
                           // like a patient .Relative doesn't neeed to find ur address 
                           // they stay in the same house 
console.log(ans)

*/

//but if we want to expose the logic to the world?
 /* This is where HTTP comes into the picture.
 It lets u create a ~hospital where people can 
  can and find u.


  how to expose ?
  by creating the HTTP server 

  and how to create HTTP server ?
  Express is framework of Node.js runtime whhich lets us to
  build HTTp server 
 */

  const express=require("express")

  function calculateSum(n){
    let ans=0;
    for(let i=0;i<=n;i++){
        ans+=i;
    }
    return ans;
  }
const app =express();
app.get('/',function(req,res){
    const n=req.query.n;
    const ans=calculateSum(n);
    res.send(ans.toString())
}) // exposing the doctors one functionality( kidney surgery,brain surgery)
   //doctors could have multiple rooms like their 
   // hospital this is one of them


app.listen(3000,function(){
    console.log("App is running on port 3000")
}); // this is deciding the address of the clinic room no 3000

//  this is how to pass the inputs 
//  http://localhost:3000/?n=100
//gives 5050


/*CODING BEGINS BABE*/


//syntax
const express= require(express)
const app = express();
app.get('/', function(req,res){
    
    
})

app.listen(3000)