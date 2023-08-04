function findRotationCount(arr) {
  if (arr[0] < arr[arr.length-1]){
    return 0
  }
  let lInd = 0;
  let rInd = arr.length - 1;
  while (lInd <= rInd){
  let mid = Math.floor((lInd + rInd) / 2);
  if (arr[mid] < arr[arr.length - 1]){
      rInd = mid -1;
  } else {
    lInd = mid + 1
  }
  }
  return mid + 1
}

module.exports = findRotationCount