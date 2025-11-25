class Bank {
  #balance;
  constructor(balance) {
    this.#balance = balance;
  }
  bankBalance() {
    console.log(`i have a balance ${this.#balance}`);
  }
}
let value = new Bank(1000);
value.bankBalance();
console.log(value.#balance);
