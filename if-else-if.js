//IF ELSE IF
//write a js function that accepts string as a input
function pack(type) {
  if (type == "tier1") {
    console.log("i will get a package of 10lpa");
  } else if (type == "tier2") {
    console.log("i will get a package of 7lpa");
  } else if (type == "tier3") {
    console.log("i will get a package of 5lpa");
  } else {
    console.log("no job");
  }
}
pack("tier3");
