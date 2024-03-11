var isPalindrome = function (s) {
  const string = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const half = string.length / 2;
  let frontPointer = 0;
  let backPointer = string.length - 1;

  if (string.length === 1) {
    return true;
  }

  while (frontPointer < half) {
    console.log(string[frontPointer], string[backPointer]);
    if (string[frontPointer] !== string[backPointer]) {
      return false;
    }
    frontPointer++;
    backPointer--;
  }

  return true;
};

isPalindrome("A man, a plan, a canal: Panama");
