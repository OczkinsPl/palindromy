const word1 = "siemka witam blablaa";
let currentWord = "";
let largestWord = "";
const findLongestWord = (str) => {
  const number = str.length;
  for (i = 0; i < number; i++) {
    if (str[i] !== " ") {
      currentWord += str[i];
      if (currentWord.length > largestWord.length) {
        largestWord = currentWord;
      }
    } else {
      currentWord = "";
    }
  }
  console.log(largestWord.length, largestWord);
  return largestWord.length;
};
findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("Szybki brązowy lis przeskoczył nad leniwym psem");
findLongestWord("Niech moc będzie z tobą");
findLongestWord("Google wykonuje beczkę");
findLongestWord("Jaka jest średnia prędkość lotu jaskółki bez ładunku");
findLongestWord(
  "Co jeśli spróbujemy użyć superdługiego słowa, takiego jak otorhinolaryngologia"
);
