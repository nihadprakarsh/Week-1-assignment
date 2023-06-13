/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */


function promiseBody(resolve,seconds){
    setTimeout(resolve,seconds);
}
function callAwait(seconds){
    let n = new Promise(promiseBody,seconds);
    return n;
}
function sleep (seconds) {
    let c = callAwait(seconds);
    // c.then(print);
    for(let i =0;i<5;++i)
    console.log("hi this is a test");
}

const prompt = require("prompt-sync")();
let sec = prompt("Enter the seconds");
sec=parseInt(sec);
sleep(sec);