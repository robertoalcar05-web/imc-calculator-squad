// @ts-nocheck

import "./style.css";

// const categories = {
//   18.5: "Magreza",
//   24.9: "Peso normal",
//   29.9: "Sobrepeso",
//   34.9: "Obesidade I",
//   39.9: "Obesidade II",
//   40: "Obesidade III",
// };

/*

Categorias do IMC:

Menor que 18,5 = Magreza
18,5 a 24,9 = Normal
25 a 29,9 = Sobrepeso
30 a 34,9 = Obesidade grau I
35 a 39,9 = Obesidade grau II
Maior que 40 = Obesidade grau III

*/

const categorize = (index) => {
  if (index < 18.5) {
    return "Magreza";
  } else if (index >= 18.5 && index < 25) {
    return "Normal";
  } else if (index >= 25 && index < 30) {
    return "Sobrepeso";
  } else if (index >= 30 && index < 35) {
    return "Obesidade grau I";
  } else if (index >= 35 && index < 40) {
    return "Obesidade grau II";
  } else {
    return "Obesidade grau III";
  }
};

const calculate = (weight, height) => {
  
  let heightInMeters = height;

  const imc = weight / (heightInMeters * heightInMeters);

return Math.round(imc * 100) / 100;
};

const printResult = (imc, category) => {
  const result = `Seu índice IMC é ${imc}, considerado ${category}`;
  document.querySelector("#result").textContent = result;
};

const main = () => {
  const weight = document.querySelector("#weight").value;
  const height = document.querySelector("#height").value;
  const imc = calculate(weight, height);
  const category = categorize(imc);

  printResult(imc, category);
};

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#calculate");
  button.addEventListener("click", main);
});
