const capitalized = (str) => {
  const number = str.length;
  let finishString = "";
  let currentWord = "";
  for (i = 0; i < number; i++) {
    if (str[i] !== " ") {
      currentWord += str[i];
    } else {
      finishString +=
        currentWord.charAt(0).toUpperCase() +
        currentWord.slice(1).toLowerCase();
      finishString += " ";
      currentWord = "";
    }
  }
  console.log(finishString);
};
capitalized("I’m a little tea pot");
capitalized("sHoRt AnD sToUt");
capitalized("HERE IS MY HANDLE HERE IS MY SPOUT");
