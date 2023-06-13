/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

const { stat } = require("fs");
const { start } = require("repl");

function promiseBody1(resolve, reject) {
  setTimeout(resolve, 1000);
}

function promiseBody2(resolve, reject) {
  setTimeout(resolve, 2000);
}

function promiseBody3(resolve, reject) {
  setTimeout(resolve, 3000);
}

function waitOneSecond() {
  return new Promise(promiseBody1);
}

function waitTwoSecond() {
  return new Promise(promiseBody2);
}

function waitThreeSecond() {
  return new Promise(promiseBody3);
}

function print(startTime) {
  let endTime = new Date().getTime();
  console.log((endTime - startTime) / 1000);
}
function calculateTime() {
  let startTime = new Date().getTime();
  waitOneSecond();
  waitTwoSecond();
  waitThreeSecond();
  let endTime = new Date().getTime();
  console.log((endTime-startTime)/1000);
}

calculateTime();