const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  }

  let answerstring = "";

  for (let i = 0; i < num; i++) {
    answerstring = answerstring + string;
  }

  return answerstring;
};

// Do not edit below this line
module.exports = repeatString;
