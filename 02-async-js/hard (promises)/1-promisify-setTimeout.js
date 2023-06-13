/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function promiseBody(resolve,n){
    setTimeout(resolve,n);
}
function getResolve(n){
    var n = new Promise(promiseBody,n);
    return n;
}
function printFile(){
    console.log("Promise Resolved");
}
function wait(n) {
    var res = getResolve(n);
    res.then(printFile);
}
const prompt = require("prompt-sync")();
let n = prompt("Enter the value of n");
n1=parseInt(n);
wait(n);