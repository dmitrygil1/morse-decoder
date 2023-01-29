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
function decode(expr) {
    let strMorseWord = "";
    for (let i = 0; i < expr.length; i += 10) {
        let morseLetter = expr.slice(i, i+10);
        morseLetter = morseLetter.replace(/10/g, '.');
        morseLetter = morseLetter.replace(/11/g, '-');
        morseLetter = morseLetter.replace(/0/g, '');
        if (morseLetter === '**********') {
            strMorseWord += " ";
        } else {
            strMorseWord += MORSE_TABLE[morseLetter];
        }
      }
    return strMorseWord;
}
module.exports = {
    decode
}
