"use strict";
const billElement = document.querySelector(".bill");
const finalBill = document.querySelector(".bill--amount");
const finalTip = document.querySelector(".tip--amount");
const peopleElement = document.querySelector(".people");
const resetBtn = document.querySelector(".reset--btn");
const customInput = document.querySelector(".custom-input");
let tipPercent = 0;
let btns = document.getElementsByClassName("tip--option");
let isClicked = 0;
for (let j = 0; j < btns.length; j++) {
  btns[j].addEventListener("click", () => {
    isClicked++;
    console.log(isClicked);
    tipPercent = Number(btns[j].value);
  });
}

document.querySelector(".submit--btn").addEventListener("click", () => {
  if (isClicked == 0) {
    tipPercent = document.querySelector(".custom-input").value;
  }
  const people = Number(peopleElement.value);
  if (people === 0) {
    document.querySelector(".error--msg").classList.remove("hidden");
    document.querySelector(".people").classList.add("red--border");
  } else {
    const billValue = Number(billElement.value);
    const tip = billValue * (tipPercent / 100);
    const bill = billValue + tip;
    const tipPerPerson = (tip / people).toFixed(2);
    const billPerPerson = bill / people;
    finalBill.textContent = `$${billPerPerson}`;
    finalTip.textContent = `$${tipPerPerson}`;
  }
});

resetBtn.addEventListener("click", () => {
  finalBill.textContent = `$0.00`;
  finalTip.textContent = `$0.00`;
  billElement.value = "";
  customInput.value = "";
  peopleElement.value = "";
  tipPercent = 0;
  isClicked = 0;
  document.querySelector(".error--msg").classList.add("hidden");
  document.querySelector(".people").classList.remove("red--border");
});
