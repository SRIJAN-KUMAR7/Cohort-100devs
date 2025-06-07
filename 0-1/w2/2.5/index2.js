/* assignement for the file system usess some of these techniques 

1 wild card .. that is after / you want to go any thing wether /1,/123,/2 etc 
we can do it through 

 */

const express=require("express")
const app =express(); 
app.get('/files/:fileName',// this colon gives the wild card feature
    function(req,res){
        const name =req.params.fileName;//--> this gives the file name
        console.log(name);
        res.json({});
});

app.listen(3000,()=>{
    console.log("App is running in port 3000")
})
//fileName
// 123123
// this is what it is logged 