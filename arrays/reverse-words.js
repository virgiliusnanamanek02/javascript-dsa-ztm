const reverseWords = (str) => {
  return str.trim().split(/\s+/).reverse().join(" ");
};

const input1 = "the sky is blue";
const input2 = "  hello world  ";
const input3 = "a good   example";

const output1 = reverseWords(input1);
const output2 = reverseWords(input2);
const output3 = reverseWords(input3);

console.log(output1); // Output: "blue is sky the"
console.log(output2); // Output: "world hello"
console.log(output3); // Output: "example good a"

const reverseWordsOpt = (str) => {
  const trimmedStr = str.trim();

  const words = trimmedStr.split(/\s+/);

  const reversedWords = words.reverse();

  const reversedStr = reversedWords.join(" ");

  return reversedStr;
};

console.log(reverseWordsOpt("a good  example"));
