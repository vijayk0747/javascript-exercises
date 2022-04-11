const sumAll = function (num1, num2) {
  let numsum = 0;

  if (
    num1 > 0 &&
    num2 > 0 &&
    Number.isInteger(num1) == true &&
    Number.isInteger(num2) == true
  ) {
    if (num1 > num2) {
      let num3 = 0;
      num3 = num1;
      num1 = num2;
      num2 = num3;
    }

    while (num1 <= num2) {
      numsum = num1 + numsum;
      num1++;
    }
    return numsum;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
