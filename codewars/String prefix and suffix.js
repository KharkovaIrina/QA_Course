function commonPrefixSuffix(s) {
  let mid = Math.floor(s.length / 2);
  let k = 0;
  if (s.length % 2) {
    k++;
  }
  for (let i = 0; i < mid; i++) {
    if (s.substring(0, mid - i) === s.substring(mid + i + k)) {
      return s.substring(mid + i + k).length;
    }
  }
  return 0;
}

console.log(commonPrefixSuffix('abcabc'));