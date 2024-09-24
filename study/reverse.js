function reverseString(str) {
  let reverseWord = "";
  const number = str.length;
  for (i = number - 1; i >= 0; i--) {
    reverseWord += str[i];
  }
  console.log(reverseWord);
  return reverseWord;
}
reverseString("hello");

reverseString("hello");
reverseString("Howdy");
reverseString("Greetings from Earth");
