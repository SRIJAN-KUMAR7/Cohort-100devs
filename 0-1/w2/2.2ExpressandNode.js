// Backend start
//week 2.2


/*NODEJS RUNTIME AND HTTP*/


/* what is ECMA SCRIPT ?
what is java  SCRIPT ?
what is nodejs?
what is bun?


ECMA script --> it is a scripting language specs on which javascript is based 
                serves as the guidelines or rules for sscripting language design
                 ES6,ES6 etc

Java Script--> The implementation 
            it is the most widely used implementation of ECMA script
            BEYOND ECMASCRIPT:but js includes addditional features like DOM which is crucial 
            for web dev but not defined by ecma script
           
            compilers of javascript are ;
            1>.V8 - used by chrome /In c language 
            2>.Spider Monkey-Used by FireFox/ in c+rust

            java script primary goal --> that when we start  webbrowser then
                           we see a we page made using html css and java script



 NODE js--> when engineers and smart people thought if there is  a v8 compiler 
           which can do tasks then why cant we make  it for backend 
           like java and golang has..
        
           some smart peoplw took out the v8 engine 
           added some backend things (like file systems reads )on top of v8
           to create a new runtime to compete with BE languages like java.


          Then---> NODE.js was Developed.
          java script is a  language node.js is a runtime
          node js is writtern in c or c++


BUN---> Node js is slow 
          it is a competitor to node js and 
         LANGUAGE used to make bun is  :Zig
         it is sgnificantly faster 
         single threaded both 
*/    


/*we will be focussing on Nodejs and how to write backend application using node js*/


/*What can we do with Node>js
1.Create CLIs(Command Line interface)-->eg Terminal commands
2.Create a Video Player
3.create a game 
#4 Create a HTTP server


Main Thing here is :HTTP server 
Hyper Text Transfer Protocol 

1. A protocol that is defined for machines to communicate.
2.Specifically for websites ,it is the most common way for ur frontend to 
  communicate with its backend.

  OPEN AI is a closed source model ..
  they will never reveal their ml model

  Frontend-->React,html,css etc
  Backend -->Node js ,rust ,golang etc
  How do frontend talk to backend --> Wires/Routers etc

  a place where some rquest goes is backend and response  comes 
  HTTP lets us communicate to the backend and frontend 

  Objective : To Create  a HTTP server in our machine
*/



/* HTTP Servers:Some code that follows HTTP protocol And is able to 
communicate with clients (browsera /mobile apps...)

think of it similiar to the call app in my phone 
which lets me communicate with my friends 


In the end the client is throwing some info at the server 
server doing something with that info 
server responding back with the final result 


Just like a function does 
function fn(){
--------
return value;
}
same for server 

the only difference is function is present in our local machine but 
the server is present in the data centres

ALsO called Remote Procedure calls
 */



/* Http CLient side :Sending requests

1.Protocol(HTTP/HTPPs)
2.Address(url/ip/port)of the backend server
3.Route
4.Headers,body query parameters
5.Methods


HTTP Server side :Responding 
1.Response Headers 
2.Response Body
3.Status codes

#Refer to image1.png for client ..
which tells us  about the protocol url and the route
https://chat.openai.com/backend-api/conversation

https://-->protocol
chat.openai.com/--->url
backend-api/conversation---->Route 

Header-->Cookie -. which store some login info of particular user
Body __> what is 2+2 (Usually in json)
Methd ---> POST,GET requests 

post-- menaing putting or posting some request ...
eg ..> asking some question from gpt 

Get--> the history of my conversation with gpt is 
GET request



refer image2.png
there is something status code -->200,404 etc.


How we send the request --> frontend tasks
we will look into what happens to the browser after the request is already fired
to backend 

1. browser parses the URL 
2. Does a DNS Lookup (converts google.com to IP)
IP-->Internet protocol
>Similiar to phone number
In networking, IP refers to the set of rules that govern how data is sent and received over the internet.

It is part of the TCP/IP suite.

Each device connected to a network is assigned an IP address, 
which is like a unique identifier
 (e.g., 192.168.1.1 


 --->when we send a chat to chatgpt first thing that happens is 
     DNS resolution ie Domain name service resolution
    Handshakes ---Computer network core theory


3.Establishes a connection to the IP(does the handshakes)




Things that happen in our browser after we fire this request 
1>you get the input(routes,body,headers)
2>you do some logic on the input ,calculate the output
3> return the output body,headers and status code 


Common methods when we send request to a backend server 
1. GET
2. POST--> adding a convo
3. PUT--> Updating something like login infos in gpt 
4. DELETE--> deleting a conversation

Some status code:
That the backend respond with are :
1.200--> Everything is OK
2. 404-->Page/Route not found
3.403-->Authentication issues
4.500-->Internal server error
*/




// /*let a =1;
// console.log(a);

// fs=require('fs');
// fs.readFile("a.txt","utf-8",(err,data)=>{
//     console.log("Data read from the file is");
//     console.log(data);
// })

// let ans =0;
// for(let i=0;i<=100;i++){
//     ans+=i;
// }
// console.log(ans)
// */


// /* there are many liraries that lets us create HTTp servers 
// The most famous One is EXPRESS


// Challenge: Scratch Http server in c/c++ 
//  */


// /*EXPRESS*/


// //Objective --> to Create a Http server 

// //this is done to import the library express
// const express=require("express");
// // console.log("installed express") npm install express

// //write some code in express
// const port=3000;
// const app=express();

// //similiar to fs.readFile("path","utf-8",(err,data)=>{})
// app.get('/',function(req,res){
//     ///can do a database call -->async

//     res.send('<b>Hello World!</b>')
// })

// app.listen(port ,function(){
//     console.log(`app is running on port ${port}`)
// })
// // app.listen(port,function(){
// //     console.log(`Example app listening on port ${port}`)
// // })


// /* what a chatgpt model  must have written 
 
// app.post('/backend-api/conversation' , function(req,res){
//    --- run a machine learning model....
//     res.send('hello World')
// })

// */


// // lets create a todo app that lets user stores todos on the server 
// // in next file



// //writing the whole code in one go

// /*
// const express= require("express");
// const port=3000;
// const app=express(); app object 
// app.get('/',function(req,res){
//     res.send('Hello World!')
// })

// app.listen(port,function(){})
// */
