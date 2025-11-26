function addMoney(value, Callback) {
  setTimeout(() => {
    console.log(`i have added money`, value);
    Callback(value);
  }, 2000);
}
function displayBalance(value) {
  console.log(`my current balance`, value);
}
addMoney(1000, displayBalance);

//Example 2

function fetchData(Callback) {
  setTimeout(() => {
    console.log("i am fetching the data");
    Callback();
  }, 4000);
}

function arrangeData(Callback) {
  setTimeout(() => {
    console.log("i am arranging data");
    Callback();
  }, 3000);
}
function displayData() {
  setTimeout(() => {
    console.log(" i am display the data");
  }, 2000);
}
fetchData(() => {
  arrangeData(() => {
    displayData();
  });
});
/* fetchData();
arrangeData();
displayData();
 */
