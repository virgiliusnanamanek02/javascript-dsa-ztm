/**
 * @param {string} s
 * @return {string[][]}
 */

var partition = function(s) {
  const result = [];

  const isPalindrome = (str) => {
    return str === str.split('').reverse().join('');
  };

  const backtrack = (start, path) => {
    if (start === s.length) {
      result.push([...path]);
      return;
    }

    for (let end = start + 1; end <= s.length; end++) {
      const substring = s.slice(start, end);
      if (isPalindrome(substring)) {
        path.push(substring);
        backtrack(end, path);
        path.pop();
      }
    }
  };

  backtrack(0, []);

  return result;
};

// Example usage:
console.log(partition("aab")); // Output: [["a","a","b"],["aa","b"]]
console.log(partition("a"));   // Output: [["a"]]

