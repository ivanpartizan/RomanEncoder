const input = document.querySelector("#number");
const output = document.querySelector("#output");

const romanInput = document.querySelector("#romanNumber");
const numberOutput = document.querySelector("#numberOutput");

const convertToRoman = (number) => {
  let romanNumbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let roman = "";
  for (let key in romanNumbers) {
    while (number >= romanNumbers[key]) {
      roman += key;
      number -= romanNumbers[key];
    }
  }

  return roman;
};

const convertFromRoman = (text) => {
  let romanNumbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let number = 0;
  for (let i = 0; i < text.length; i++) {
    if (
      (text[i] == "I" && text[i + 1] == "V") ||
      (text[i] == "I" && text[i + 1] == "X") ||
      (text[i] == "X" && text[i + 1] == "L") ||
      (text[i] == "X" && text[i + 1] == "C") ||
      (text[i] == "C" && text[i + 1] == "D") ||
      (text[i] == "C" && text[i + 1] == "M")
    ) {
      number += romanNumbers[text[i + 1]] - romanNumbers[text[i]];
      i++;
    } else {
      number += romanNumbers[text[i]];
    }
  }
  if (number !== number) return `Not a valid Roman numeral`;
  if (number === 0) return ``;
  return number;
};

input.addEventListener("keyup", function () {
  output.innerHTML = convertToRoman(input.value);
});

romanInput.addEventListener("keyup", function (e) {
  numberOutput.innerHTML = convertFromRoman(romanInput.value);
});
