function checkParentheses(str) {
  if (!str.includes("(") && !str.includes(")")) {
    return true;
  }

  let leftParenthesis, rightParenthesis;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      leftParenthesis = i;
      break;
    }
  }

  for (let j = str.length - 1; j > 0; j--) {
    if (str[j] === ")") {
      rightParenthesis = j;
      break;
    }
  }

  if (leftParenthesis === undefined || rightParenthesis === undefined) {
    return false;
  } else {
    let insideParentheses = str.slice(leftParenthesis + 1, rightParenthesis);
    if (leftParenthesis > 0 || rightParenthesis < str.length - 1) {
      let beforeleftParenthesis = str.slice(0, leftParenthesis);
      let afterrightParenthesis = str.slice(rightParenthesis + 1, str.length);
      if (
        beforeleftParenthesis.includes(")") ||
        afterrightParenthesis.includes("(")
      ) {
        return false;
      }
    }
    return checkParenthesis(insideParentheses);
  }
}
