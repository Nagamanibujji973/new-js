let array2 = [0, 0, 1, 0, 0, 0, 0, 0, 1];
let tree = 3;
let count = 0;

for (let i = 0; i < array2.length; i++) {
  if (array2[i] === 0) {
    let prevValue = i === 0 ? 0 : array2[i - 1];
    let nextValue = i === array2.length - 1 ? 0 : array2[i + 1];

    if (prevValue === 0 && nextValue === 0) {
      array2[i] = 1;
      count++;
    }
  }
}

console.log(tree === count);

/* const sum = (a, b) => {
  return a + b;
};
let value = sum(5, 10);
console.log(value); */

/* const sum1 = (a, b) => a + b;
{
  return a + b;
}
sum1(5, 10);
function sum1(a, b) {
  return a + b;
}
sum1(5, 10); */

setTimeout(() => {
  console.log("i have a data");
}, 5000);

setInterval(() => {
  console.log("i have a data");
}, 2000);
