let array1 = [1, 0, 0, 1, 0, 0, 0, 1];
let tree = 2;
let count = 0;
for (let i = 0; i < array1.length; i++) {
  if (array1[i] == 0) {
    let prevValue = array1[i - i];
    let nextvalue = array1[i + 1];
    if (prevValue == 0 && nextValue == 0) {
      array1[i] = 1;
      count++;
    }
  }
}
console.log(tree == count);
