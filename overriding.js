class Bank {
  bankBalance() {
    console.log("my bank balance");
  }
}

class AxisBank extends Bank {
  bankBalance() {
    console.log("my Axis bank balance");
  }
}
let value = new Bank();
value.bankBalance();
