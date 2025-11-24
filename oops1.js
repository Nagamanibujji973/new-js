class House {
  constructor(name) {
    this.name = name;
  }
  myHouse() {
    console.log(`my house name is ${this.name}`);
  }
}
let value = new House("house");
value.myHouse();
