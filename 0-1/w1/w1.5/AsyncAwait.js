// // what gives promises more power the
// //ASYNC AWAIT

// // (again just a syntactic sugar still uses callbacks /promises under the hood)


function srijanAsyncfn(){
    let p=new Promise(function(resolve){
          //do async  something 
        resolve("hi there");

    });
    return p;
}
function main(){
    srijanAsyncfn().then(function(vakue){
      
        console.log(vakue);
    }
    )
}
main();//hi there


//async await syntax

function srijanAsyncfunction(){
    let t=new Promise(function(resolve){
          //do async  something 
        setTimeout(function(){
            resolve("hi there");
        },1000)

    });
    return t;
}

async function main1(){
    let value= await srijanAsyncfunction()
    console.log(value)
}

main1();

//if we dont use the await keyword then we get Promise<pending>
// but whwn we us the await keyword we get output as -- hi there 


///async is used in the caller side that is when 
// the main function is called 
// every await must have async function cant use in the op or any other way
 