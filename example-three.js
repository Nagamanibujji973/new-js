function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log("i have counter", count);
    console.log("--------");
  }
  inner();
}
outer();
outer();
