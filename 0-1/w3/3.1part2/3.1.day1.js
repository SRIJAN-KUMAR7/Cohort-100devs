const zod = require("zod");

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
}

// Example usage
validateInput1({
    email: "srijankumar77777@gmail.com",
    password: "123446768"
});
//thnku hkirat

