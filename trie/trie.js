// Trie Data Structure

// Time Complexity: O(N)
// Space Complexity: O(N)


class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}


class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let currentNode = this.root;


    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode();
      }

      currentNode = currentNode.children[char];

      if (i === word.length - 1) {
        currentNode.isEndOfWord = true;
      }

      return this.root;
    }
  }

  search(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!currentNode.children[char]) {
        return false;
      } else {
        currentNode = currentNode.children[char];
      }

      if (i === word.length - 1 && currentNode.isEndOfWord) {
        return true;
      }

      return false;
    }

    return false;
  }
}
