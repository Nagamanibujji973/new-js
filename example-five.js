function bank() {
  let amount = 1000;
  function addmoney(value) {
    amount = amount + value;
    console.log("i have amount", amount);
    console.log("------");
  }
  return addmoney;
}
let value = bank();
value(1000);
value(1000);
value(1000);
value(1000);
