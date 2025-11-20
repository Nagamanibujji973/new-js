let name = "vamsi";
function outer() {
  console.log(name);
  let name2 = "mohan"; //block scope
  console.log(name2);
  function inner() {
    let name3 = "bujji"; //nested scope
    console.log(name3);
  }
  inner();
}
//console.log(name); //global dscope
//console.log(name2); //local scope
outer();

let name = "megha";
function outer() {
  let name2 = "archu";
  function inner() {
    let name3 = "abhi";
    console.log(name);
    console.log(name2);
    console.log(name3);
  }
  inner();
}
outer();
