/*

Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


 */

function callClock(){
    console.clear();
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    console.log(hour+":"+minutes+":"+seconds);
}
// function callClock1(){
//     // console.clear();
//     let hour = new Date().getHours();
//     let minutes = new Date().getMinutes();
//     let seconds = new Date().getSeconds();
//     let dur = new Date().getDay();
//     console.log(hour+":"+minutes+":"+seconds+" "+dur);

// }

 setInterval(callClock,1000);
//  setInterval(callClock1,1000);
