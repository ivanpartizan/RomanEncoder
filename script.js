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

// GSAP
const tl = gsap.timeline({
  defaults: { duration: 1, ease: "power1.out" },
});
tl.fromTo(".skillIcons", { scale: 0 }, { scale: 1, delay: 5 });
tl.fromTo(
  ".icon1",
  { opacity: 0, x: -50, rotation: "-90deg" },
  { opacity: 1, x: 0, rotation: "0deg" }
);
tl.fromTo(
  ".icon2",
  { opacity: 0, x: -50, rotation: "-90deg" },
  { opacity: 1, x: 0, rotation: "0deg" }
);
tl.fromTo(
  ".icon3",
  { opacity: 0, x: -50, rotation: "-90deg" },
  { opacity: 1, x: 0, rotation: "0deg" }
);
tl.fromTo(
  ".icon4",
  { opacity: 0, x: -50, rotation: "-90deg" },
  { opacity: 1, x: 0, rotation: "0deg" }
);
tl.fromTo(
  ".icon5",
  { opacity: 0, x: -50, rotation: "-90deg" },
  { opacity: 1, x: 0, rotation: "0deg" }
);
tl.fromTo(
  ".icon6",
  { opacity: 0, x: 50, rotation: "-90deg" },
  { opacity: 1, x: 0, rotation: "0deg" }
);
tl.fromTo(
  ".icon7",
  { opacity: 0, x: 50, rotation: "-90deg" },
  { opacity: 1, x: 0, rotation: "0deg" }
);
tl.fromTo(
  ".icon8",
  { opacity: 0, x: 50, rotation: "-90deg" },
  { opacity: 1, x: 0, rotation: "0deg" }
);
tl.fromTo(
  ".icon9",
  { opacity: 0, x: -50, rotation: "-90deg" },
  { opacity: 1, x: 0, rotation: "0deg" }
);
