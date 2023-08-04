function sortedFrequency(arr, target) {
  let lInd = 0;
  let rInd = arr.length - 1;
  let targetStart = 0;
  while (lInd <= rInd) {
    let mid = Math.floor((lInd + rInd) / 2);
    if (arr[mid] === target) {
      rInd = mid - 1;
    } else {
      lInd = mid + 1;
    }
  }
  targetStart = lInd;
  rInd = arr.length - 1;
  while (lInd <= rInd) {
    let mid = Math.floor((lInd + rInd) / 2);
    if (arr[mid] === target) {
      lInd = mid + 1;
    } else {
      rInd = mid - 1;
    }
  }
  return rInd - targetStart + 1;
}

module.exports = sortedFrequency;
