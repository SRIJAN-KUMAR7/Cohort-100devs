const zod = require("zod");
const express=require("express");
const e = require("express");
const app =express();
app.use(express.json());

// Function to validate if input is an array of numbers with at least one element
function validateInput(obj) {
    const schema = zod.array(zod.number()).nonempty(); // Ensures at least 1 number
    const response = schema.safeParse(obj);
    console.log(response);
}

// Example usage
validateInput(["1", 2, 3]); // Fails due to "1" being a string
validateInput([1, 2, 3]);   // Passes

// Function to validate email and password
function validateInput1(data) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    });

    const result = schema.safeParse(data);
    console.log(result);
    return result;
}

// Example usage
validateInput1({
    email: "srijankumar77777@gmail.com",
    password: "12356567757"
});
//thnku hkirat

//starting agin and this time end this shit
app.post('/',function(req,res){
    const inputs=req.body
    const response=validateInput1(inputs)


    //
    //
    //
    //HERE WE HAVE TO VALIDATE THE INPUTS 
    //
    //
    if(!response.success){
        res.json({
            msg:"Your inputs are invalid"
        })
        return;
    }
    else{
        res.json({
            msg:"Welcome bro"
        })
    }
})

app.listen(3000,function(){
    console.log("app is running on 3000")
})


//this came from postman

// {
//   success: true,
//   data: { email: 'srijankua@gmail.com', password: '12343442523466' }
// }

// {
//     "msg": "Welcome bro"
// }

//coercion--> to push someone to do something
