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

const categorize = (index) => {};

const calculate = (weight, height) => {};

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
