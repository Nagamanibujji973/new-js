class DL {
  isEligible(name, age) {
    if (age == undefined || age < 18) {
      console.log("not Eligible");
    } else {
      console.log("Eligible");
    }
  }
}
let value = new DL();
value.isEligible("vamsi");
value.isEligible("vamsi", 19);
