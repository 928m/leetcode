function countedAlphabet(str) {
  const obj = {};

  for (const item of str.split("")) {
    obj[item] = obj[item] ? obj[item] + 1 : 1;
  }

  return obj;
}

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const originObj = countedAlphabet(s);
  const targetObj = countedAlphabet(t);

  for (const key in originObj) {
    if (originObj[key] !== targetObj[key]) {
      return false;
    }
  }

  return true;
};
