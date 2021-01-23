const input = document.querySelector("#number");
const output = document.querySelector("#output");

const convertToRoman = () => {
  console.log(input.value);
  output.innerHTML = `${input.value}`;
};

input.addEventListener("keyup", convertToRoman);
