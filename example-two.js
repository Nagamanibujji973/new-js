function outer() {
  let name = "jaya";
  console.log(name);
  function inner() {
    let name2 = "lalli";
    console.log(name2);
    console.log("--------");
  }
  return inner;
}
let value = outer();
value();
value();
value();
