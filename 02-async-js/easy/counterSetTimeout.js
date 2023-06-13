let counter = 1;

function timeout() {
  console.clear();
  console.log(counter);
  counter++;
  setTimeout(timeout, 1000);
}

timeout();
