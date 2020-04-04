const diceBtn = document.querySelector('.dice_btn');
const diceImg = document.querySelector('.dice_img_inner');

//dice function
let diceRoll = () => {
  return Math.floor( Math.random() * 20 + 1 );
}

diceBtn.addEventListener('click', () => {

  //reset img if last roll was a critical
  
  //save roll result
  let rollResult = diceRoll();
  console.log(rollResult);
  diceImg.textContent = rollResult;
})
