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
