function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var newArray = ["what"];
  newArray.forEach(callback);
  return newArray;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
