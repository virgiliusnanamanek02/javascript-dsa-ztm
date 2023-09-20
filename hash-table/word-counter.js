const wordFrequencyCounter = (sentence) => {
  const sentencesArr = sentence.split(" ");
  const wordCounter = {};

  for (let i = 0; i < sentencesArr.length; i++) {
    const word = sentencesArr[i];

    if (wordCounter[word]) {
      wordCounter[word]++
    } else {
      wordCounter[word] = 1;
    }

  }

  return wordCounter;
}

console.log(wordFrequencyCounter("The quick brown fox jumps over the lazy dog dog"))
