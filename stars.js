for (let i = 1; i <= 5; i++) {
  let text = "*";
  console.log(text.repeat(i)); //only one loop using
}

//here two loops using
for (let i = 1; i <= 5; i++) {
  let text = "";
  for (let j = 1; j <= i; j++) {
    text = text + "*";
  }
  console.log(text);
}
