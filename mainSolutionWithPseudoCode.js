//function takes in a string as an input and returns
//true if all the parentheses in the string
//are properly closed and nested
//i.e. (((()))) -> returns true
//(()()) -> returns false bc its not nested
//((()))))) -> return false bc its not properly closed

function checkParentheses(str) {
  //in order to check if parentheses are nested we have to
  //go through the string and check every set of parentheses
  //layer by layear. Starting with out-layer.

  //I'm suggesting to use a recursion for this problem.

  //The base case is an empty string without any parentheses
  //thats where our recursive algorithm will stop
  if (!str.includes("(") && !str.includes(")")) {
    return true;
  }

  //for each layer we need to set an index of right & left parenthesis
  let leftParenthesis, rightParenthesis;

  //we are going to iterate over the string
  //until we find the first left parenthesis
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      leftParenthesis = i;
      break;
    }
  }
  //and we are also going to iterate over the string
  //until we find the first right parenthesis
  for (let j = str.length - 1; j > 0; j--) {
    if (str[j] === ")") {
      rightParenthesis = j;
      break;
    }
  }

  //if one of the parentheses is missing
  //we are going to return false right away
  if (leftParenthesis === undefined || rightParenthesis === undefined) {
    return false;
  } else {
    //if the first set of parentheses was find
    //we are going to slice them out of the string
    let insideParentheses = str.slice(leftParenthesis + 1, rightParenthesis);

    //in case if the first pair of parentheses is not right
    //on the edge of the string, we need to check if there is
    //any opposite parenthesis before and after
    //the first properly closed pair
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

    //calling our function with the remaining string.
    return checkParenthesis(insideParentheses);
  }
}
