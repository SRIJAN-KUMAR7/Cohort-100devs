//authentication

//we did very basic auth
// As you can tell by now, anyone can send requests to your backend 
// They can just go to postman and send a request 
// How do you ensure that this user has access to a certain resource?



//DUMB WAY-->- Ask user to send username and password in all requests as headers


//AUTHENTICATION___
// Slightly better way -  
// 1. Give the user back a token on signup/signin 
// 2. Ask the user to send back the token in all future requests 
// 3. When the user logs out, ask the user to forget the token (or revoke it from the backend)


//when we send email and password and we send this to backend
/*
backend authenticates the input with the databases 
and the next thing it returns a token to browsers Local storage
and on further  when user goes to some pages different to login page 
this token is carried out in every subsequent steps and then the authentication is done */