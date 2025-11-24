class Mobile {
  buyproduct() {
    console.log(`i am buying a product`);
  }
}

class Apple extends Mobile {
  buyproduct() {
    console.log(`i am going to buy a mobile apple`);
  }
}

class Samsung extends Mobile {
  buyproduct() {
    console.log(`buying product samsung`);
  }
}
let value = new Mobile();
value.buyproduct();
