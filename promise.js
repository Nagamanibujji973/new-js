let lifeline = new Promise((resolve, reject) => {
  let haveJob = true;
  if (haveJob) {
    resolve("he/she accepted");
  } else {
    reject("she rejected");
  }
});
lifeline
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
