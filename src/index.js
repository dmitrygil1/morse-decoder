const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};
function decoder(expr) {
  let decodeWordsArrg = [];
  let finaleDecoderArrg = [];
  for (let i = 1; i <= expr.split("").length / 10; i++) {
    let wordArray = expr.split("").slice(`${ i-1 }0`,`${i}0`);
    let morseWord = [];
    for (let m = 0; m < wordArray.length; m += 2) {
      if (wordArray[m] + wordArray[m + 1] === "10") {
        morseWord.push(".");
      } else if (wordArray[m] + wordArray[m + 1] === "11") {
        morseWord.push("-");
      }}
  decodeWordsArrg.push(morseWord);
  }
  decodeWordsArrg.forEach((elements) => {
    let valueElement = elements.join("");
    if (MORSE_TABLE.hasOwnProperty(valueElement) == false) {
      finaleDecoderArrg.push(" ");
    } else {
      finaleDecoderArrg.push(MORSE_TABLE[valueElement]);
    }
  });
  return finaleDecoderArrg.join("");
}
module.exports = {
  decoder,
};
