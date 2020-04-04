"use strict";

var diceBtn = document.querySelector('.dice_btn');
var diceImg = document.querySelector('.dice_img_inner'); //dice function

var diceRoll = function diceRoll() {
  return Math.floor(Math.random() * 20 + 1);
};

diceBtn.addEventListener('click', function () {
  //reset img if last roll was a critical
  //save roll result
  var rollResult = diceRoll();
  console.log(rollResult);
  diceImg.textContent = rollResult;
});