/**
 *Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
Example 2:

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
Example 3:

Input: s = ""
Output: 0

Input: s = "((()"
Output: 2
 *
 *
 *
 *
 * /

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let stack = [];
  let max = 0;
  stack.push(-1); // Inisialisasi stack dengan index -1 untuk menampung index dari s
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      if (stack.length > 0) {
        stack.pop();
        if (stack.length > 0) {
          max = Math.max(max, i - stack[stack.length - 1]);
        } else {
          stack.push(i);
        }
      } else {
        stack.push(i);
      }
    }
  }

  return max;
};

console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses(")()())"));
console.log(longestValidParentheses(""));
console.log(longestValidParentheses("()"));
