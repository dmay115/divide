function findFloor(arr, target) {
  let lInd = 0;
  let rInd = arr.length - 1;
  if (arr[0] > target) {
    return -1;
  }
  while (lInd <= rInd) {
    let mid = Math.floor((lInd + rInd) / 2);
    if (arr[mid] === target) {
      return arr[mid];
    } else if (arr[mid] > target) {
      rInd = mid - 1;
    } else {
      lInd = mid + 1;
    }
  }
  return arr[lInd];
}

module.exports = findFloor;
