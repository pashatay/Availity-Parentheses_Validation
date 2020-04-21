//I also wrote a simple algorithm to check if all parentheses
//are properly closed
function checkParenthesis(str) {
  //declared a variable count to count the parentheses
  let count = 0;
  for (let char of str) {
    char === "(" ? count++ : char === ")" ? count-- : 0;
    //if a prenthesis not in the right place the count will go below zero
    //which automaticaly will break the loop
    if (count < 0) {
      return false;
    }
  }
  //to cover a possible edge case where the last parentheses
  //doesnt have a pair.
  return count === 0;
}
