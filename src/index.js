  function longestConsecutiveLength(array) {
  // your solution here
  function sortNumber(a,b) {
    return a - b;
  }
  let sortedArray = array.sort(sortNumber);
  let number,maxNumber;
  let consecutiveLength = [];
  number = 1;
  for (let i = 0; i < sortedArray.length-1; i++) {
    if(sortedArray[i+1]-sortedArray[i] == 1) {
      number++;
    }
    if (sortedArray[i+1]-sortedArray[i] !== 0 && sortedArray[i+1]-sortedArray[i] !== 1) {
      maxNumber = number;
      consecutiveLength.push(maxNumber);
      number = 1;
    }
  }
  if (number!==1) {
    consecutiveLength.push(number);
  }
  consecutiveLength.push(number);
  if (array.length == 0 || array.length == 1) {
    return array.length;
  }
  return Math.max.apply(null,consecutiveLength);
}
module.exports = longestConsecutiveLength;
