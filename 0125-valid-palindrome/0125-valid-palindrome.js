var isPalindrome = function (s) {
  const string = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const half = string.length / 2;

  if (string.length === 1) {
      return true;
  }

  return (
    string.slice(0, half) === string.slice(-half).split("").reverse().join("")
  );
};

isPalindrome("A man, a plan, a canal: Panama");
