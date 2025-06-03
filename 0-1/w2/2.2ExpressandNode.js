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

Get--> the history of my converssation with gpt is 
GET request





*/