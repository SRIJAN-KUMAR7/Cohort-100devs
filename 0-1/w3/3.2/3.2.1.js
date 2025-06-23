/* FETCH ...AUTHENTICATION AND DATABASES */


//the fetch API
//
// Until now, we’ve sent requests 
// in 2 ways
// Postman Browser
//  URL bar


//but there is a third way

// There’s a third way
// 
// Lets say I ask you create an HTML page where 
// 1. You can see the names of 10 people 
// 2. You need to make sure you get these data from an API call
// HTTP ServerHTML 
// code you need 
// to write
// GET 
// https://fakerapi.it/api/v1/persons
//view the pdf

//i just need to make a html page that hits this API
//
//done

// //Project for today -  
// Let people sign up to your website 
// Only allow signed in users to see people (create 
// a dummy people list)


//before this we need to know the authentication
// Almost all websites have auth 
// There are complicated ways  
// (Login with google...) to do auth 
// Easiest is a username password  based auth


// lets first know some crypttographic jargons
//  1.Hashing 
// 2. Encryption 
// 3. Json web tokens 
// 4. Local storage
// Before we get into authentication 
// Lets understand some cryptography jargon


/* HASHING-->

From the input fields ,username and password goes to backend server and 
then the password is hashed 
 e.g.(ilovekiara) is my password-->
 hash function converts (ilovekiara) to -->(6318149hjbdka7291)..and this gets passed to database DB

 REASON:
 Markzuckerberg should not be able to look 
 into this password

 
1. Hashing is one directional 
2. Given the output, no one can find out the input 
no one can decrypt the hash




1. Hashing is one way 
2. Given the output, no one can find out the input 
3. Changing the input a lil bit changes the output by a lot



//ENCRYPTION
. Encryption is two way 
2. A string is encrypted using a password 
3. String can be decrypted using the same password


You must have the key/pass to encrypt and decrypt


//JWT-->Json web tokens
 Its neither of encryption or hashing  
(its technically a digital signature) 
2. Anyone can see the original output given the signature 
3. Signature can be verified only using the password

this takes some json as a input and convert this 
via hasing/encryption god knows to very long string high level

JWT toket is a very long string--> which can be converted to original Json 
through jwt.io 
but this is only verified by respective servers (signatures)

just like how a bank verifies the cheque signature

the loken which we are mentioning in chatgpt or facebook one it is stored in the 

LOCAL STORAGE
//this token is stored in this local storage
//almost stored for permanent time


take a look to image.png


*/












































































// from mukesh notes


//Authentication

// Project for today - (will do it after understanding the authentication)
// Let people sign up to your website
// Only allow signed in users to see people (create a dummy people list)

// Before we get into authentication, lets understand some cryptography jargon
// 1. Hashing
// 2. Encryption
// 3. Json web tokens (decode, verify)
// 4. Local storage

//Details explanation of the above term

// 1. Hashing
// Definition:
// Hashing is the process of converting input data (like a password) into a fixed-size string using a mathematical algorithm.
// This output is called a hash and it cannot be reversed back to the original input.

// How it Works:
// A hashing algorithm (like SHA-256, bcrypt) takes input data and produces a hash.

// Even a tiny change in the input creates a very different hash.

// Hashing is one-way: you cannot get the original input from the hash.

// Example Use:
// Hashing is commonly used to store passwords securely in databases. Instead of saving the password, only its hash is stored.
// During login, the entered password is hashed and compared with the stored hash.



// 2. Encryption
// Definition:
// Encryption is the process of converting data into a secret format using a key, so that only authorized parties can read it. 
// It can be reversed (decrypted) using the correct key.

// How it Works:
// The original data (plaintext) is combined with a secret key using an encryption algorithm to create ciphertext.

// The ciphertext can later be decrypted back to the original data using the key.

// Types:
// A. Symmetric encryption: Same key is used for both encryption and decryption.

// B. Asymmetric encryption: A public key encrypts the data, and a private key decrypts it.

// Example Use:
// Encryption is used to protect sensitive data such as credit card details, personal information,
//  or any confidential message sent over the internet.



// 3. JSON Web Tokens (JWT)
// Definition:
// A JSON Web Token (JWT) is a compact and secure way of transmitting information between a server and a client as a JSON object.
// It is widely used for authentication in web applications.

// Structure:
// A JWT has three parts:

// Header.Payload.Signature

// These parts are encoded using Base64 and separated by dots (.).

// Header: Contains information about the algorithm used.

// Payload: Contains the actual data (e.g., user ID, role, expiration).

// Signature: Ensures the token has not been tampered with.

// How it Works:
// The server creates a JWT after the user logs in.

// The token is sent to the client and stored (typically in local storage).

// The client sends the token in future requests to access protected routes.

// The server verifies the token before allowing access.


// Decode (JWT):
// Decoding means extracting the payload from a JWT without checking if it’s secure or valid. 
// This only shows the data; it does not confirm its authenticity.

// Example (JavaScript):

// const payload = JSON.parse(atob(token.split('.')[1]));

// This extracts the second part (payload) of the token and decodes it using Base64.

// Note: This only reads the token; it does not ensure the data is trustworthy.


// Verify (JWT):
// Verification checks if the token is genuine and hasn’t been altered. 
// This is done using the signature part of the token and a secret key.

// How Verification Works:

// The server recalculates the signature using the header and payload.

// If the new signature matches the token’s signature, it is valid.

// If not, the token is considered invalid or tampered with.

// Example (Node.js):

// const jwt = require('jsonwebtoken');
// jwt.verify(token, 'your-secret-key');

// Verification must always be done on the server to ensure security.



// 4. Local Storage
// Definition:
// Local Storage is a browser feature that allows web applications to store data on the user's device as key-value pairs.
// This data remains saved even after the browser is closed.

// How it Works:
// Local Storage is accessed using JavaScript with localStorage.

// Examples:

// // Store data
// localStorage.setItem("username", "Mukesh");

// // Get data
// let user = localStorage.getItem("username");

// // Remove data
// localStorage.removeItem("username");

// Key Points:
// Only strings can be stored (objects must be stringified).

// Storage is local to the user's browser and not shared across devices.

// It is useful for storing things like JWTs, themes, user preferences, etc.