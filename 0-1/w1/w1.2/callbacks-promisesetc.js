//callback functions | event loops and callback queues
///synchronous and asynchronous functions 

let start = Date.now();
setTimeout(a,1000);
 function a(){
    let end = Date.now();
    console.log("Elapsed time (ms):", end - start);
 }