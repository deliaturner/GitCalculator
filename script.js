function addition() {
  let num1 = parseInt(document.getElementById("add1").value);
  let num2 = parseInt(document.getElementById("add2").value);
  let answer = document.getElementById("addTotal");
  let totalAnswer = num1 + num2;
  answer.value = totalAnswer;
}
function subtraction() {
  let num1 = document.getElementById("sub1").value;
  let num2 = document.getElementById("sub2").value;
  let answer = document.getElementById("subTotal");
  let totalAnswer = num1 - num2;
  answer.value = totalAnswer;
}
function multiplication() {
  let num1 = document.getElementById("mult1").value;
  let num2 = document.getElementById("mult2").value;
  let answer = document.getElementById("multTotal");
  let totalAnswer = num1 * num2;
  answer.value = totalAnswer;
}
function division() {
  let num1 = document.getElementById("div1").value;
  let num2 = document.getElementById("div2").value;
  let answer = document.getElementById("divTotal");
  let totalAnswer = num1 / num2;
  answer.value = totalAnswer;
}
function hello() {
  document.querySelector("body").innerText = "Hello";
}