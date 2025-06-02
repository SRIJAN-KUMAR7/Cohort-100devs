
let a=1;
console.log(a);

let fs =require('fs');
fs.readFile("a.txt","utf-8",(err,data)=>{
       if (err) {
        console.error("Error reading file:", err);
        return;
    }
    data=data+" srijan updated the file a.txt"
    console.log("original data :")
    console.log("Data read from this file is ");
    console.log(data)

    let cleanedfile=data.replace(/\s+/g,""); /// this removes all the whitespaces tabs and different thinga
    console.log("data after cleaning whitespaces");
    console.log(cleanedfile)
})

let ans=0;
for(let i=0;i<=100;i++){
    ans=ans+i;

};
console.log(ans)
console.log("hi there")