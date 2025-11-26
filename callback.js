one(two);

function one(Callback) {
  setTimeout(() => {
    console.log("function one executed");
    Callback();
  }, 2000);
}
function two() {
  console.log("function two executed");
}
/* one();
two(); */
//example2
abc(xyz);
function abc(Callback) {
  setTimeout(() => {
    console.log("this is my function");
    Callback();
  }, 2000);
}
function xyz() {
  setTimeout(() => {
    console.log("this is my second function");
  }, 3000);
}
/* abc();
xyz(); */
