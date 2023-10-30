/**
 *
 * Example 1:

Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"
Example 2:

Input: dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
Output: "a a b c"
 *
 *
 *
 * /

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */

var replaceWords = function(dictionary, sentence) {
  const rootSet = new Set(dictionary);
  const rootMap = new Map();

  for (const root of dictionary) {
    if (!rootMap.has(root) || root.length < rootMap.get(root).length) {
      rootMap.set(root, root);
    }
  }

  const words = sentence.split(' ');

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 1; j <= word.length; j++) {
      const prefix = word.slice(0, j);
      if (rootSet.has(prefix)) {
        words[i] = rootMap.get(prefix);
        break;
      }
    }
  }

  return words.join(' ');
};

// Example usage:
const dictionary1 = ["cat", "bat", "rat"];
const sentence1 = "the cattle was rattled by the battery";
console.log(replaceWords(dictionary1, sentence1)); // Output: "the cat was rat by the bat"

const dictionary2 = ["a", "b", "c"];
const sentence2 = "aadsfasf absbs bbab cadsfafs";
console.log(replaceWords(dictionary2, sentence2)); // Output: "a a b c"

