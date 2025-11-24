class House {
  constructor(name) {
    this.name = name;
  }
  myHouse() {
    console.log(`my house name is ${this.name}`);
  }
}
class myHouse extends House {}
let value = new myHouse("vamsi");
value.myHouse();
