// JSON:Java script object notation
const user={
    name:"srijan kumar",
    age:22,
    gender:"male"
}

// but if we want to share to some other sytem we need to convert this to string 

const user1 = '{"name":"srijan","age":22,"gender":"male"}';
console.log(user1["name"])
//undefined bcz od string 
console.log(user1[0])
//{


// there are two json functions 
//JSON.parse
//JSON.stringify
const user2=JSON.parse(user1);
console.log(user2["gender"]);
//male

const user3={
    name:"iron man",
    age:34,
    gender:"female"
}
const finalString=JSON.stringify(user3);
console.log(finalString)
//{"name":"iron man","age":34,"gender":"female"}