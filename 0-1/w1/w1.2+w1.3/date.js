// Date  class is prebuild in js 
const currentDate= new Date();
console.log(currentDate);
console.log(currentDate.getDate())
console.log(currentDate.getMonth()+1);//0 based indexing 
console.log(currentDate.getFullYear());


console.log("Time in milliseconds since 1970:",currentDate.getTime());
//epoch timestamp

function calculateSum(){
    let a=0;
    for(let i=0;i<10000000000;i++){
        a=a+i;
    }
    return a;
}
const beforeDate=new Date();
const beforeTime=beforeDate.getTime();
calculateSum();
const afterDate=new Date();
const afterTime=afterDate.getTime();

console.log(afterTime-beforeTime);

//outputs:
// 2025-05-28T15:59:21.368Z
// 28
// 5
// 2025
// Time in milliseconds since 1970: 1748447961368        
// 4859

//print the current time 
function currenTimeprint(){
    console.log(new Date().getTime());
}
// setInterval(currenTimeprint,1000)

//assignment 
function currentTimePrint() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // Add leading zeros if needed (e.g., 07:05 instead of 7:5)
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;

    console.log(`${hours}:${minutes}`);
}

setInterval(currentTimePrint, 1000);


function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
}

// Example Usage for Date Methods
dateMethods();