const input = document.querySelector("#number");
const output = document.querySelector("#output");

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

input.addEventListener("keyup", function () {
  output.innerHTML = convertToRoman(input.value);
});
