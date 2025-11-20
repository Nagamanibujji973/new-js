/* let array = [1, "vamsi", true];
let data = new Array();
console.log(array); */

/* let array = [1, 2, 3, 4, 5];
let data = new Array(1, 2, 3, 4, 5);
console.log(array);
console.log(data);
array.push(6);
console.log(array);
array.pop();
console.log(array);

let color = ["yellow", "red", "voilet", "black", "gray"];
console.log(color); */
//color.push("aqua");
//color.pop("aqua");//remove the tailend element
/* color.shift(); //shift to first element
color.unshift("gray");
color.push("aqua");
color.indexOf("black");
console.log(color.indexOf("black"));
console.log(color);
console.log(color.sort());
console.log(color.sort().reverse());
color.splice(1, 2, "pink", "cream");
console.log(color); */
/* let value = color.splice(1, 2, "pink", "cream");
console.log(color);
 */

/* let color1 = ["yellow"];
let key = ["honda"];
let value = color1.concat(key);
console.log(value);
let color2 = ["green", "yellow"];
for (let i = 0; i < color.length; i++) {
  console.log(color2(i));
} */

let string = "i am attending class in Besant";
//js program find largest word in the sentence or string?
let string1 = "i am attending class in besant";
let itr = string.split(" ");
let final = "";
for (let i = 0; i < itr.length; i++) {
  if (itr[i].length > final.length) {
    final = itr[i];
  }
}
console.log(final);

console.log("3" + true);
console.log("3" - true);
console.log(2 == 2);
console.log((2 == 2) == 2);
console.log((((2 == 2) == 2) == 2) == 0);
console.log(x);
var x;
console.log(y);
let y;
