const removeFromArray = function (arr, arg1, arg2, arg3, arg4, arg5) {
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === arg1 ||
      arr[i] === arg2 ||
      arr[i] === arg3 ||
      arr[i] === arg4 ||
      arr[i] === arg5
    ) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
