const express=require('express')
const app= express();
const port=process.env.PORT || 3001;
app.use(express.json());

app.post('/',function(req,res){
     res.send("hi there");
})

app.listen(port, function() {
    console.log(`App is running on port ${port}`);
});
/*process.env.POST 
What is this ?
this is the way to access  the environment variable
but 
what is a environment process
An environment variable is a key-value pair 
used by the operating system and applications to store configuration setting


If there is process runninng for example a
golang ,nodejs or java process 
we can acess the environment variable during the process 

in node  we can do it in 
process.env.PORT
*/


/* QUery pararmeters in the url to access the message 
   like const message=req.query.message;
    we have to change the url like 
    eg:
    http://localhost:3000/backend-api/conversation/?message=123&b=1&c=1



    🔹 GET Request
Used to: Retrieve data from the server

Data is sent in: The URL (as query parameters)

Example:

url
https://example.com/search?query=apple
Visible in browser: ✅ Yes

Use case: Viewing a page, searching, loading content

🔸 POST Request
Used to: Send data to the server (e.g., form submission)

Data is sent in: The request body (not visible in URL)

Example:

js
fetch('/login', {
  method: 'POST',
  body: JSON.stringify({ username: "srijan", password: "1234" })
})
Visible in browser: ❌ No (hidden from URL)

Use case: Logging in, uploading files, submitting forms

 */

