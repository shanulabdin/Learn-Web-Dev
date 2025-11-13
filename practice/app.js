const rem = document.querySelector('#rem');
const count = document.querySelector('#count');
const inc = document.querySelector('#inc');
const reset = document.querySelector('#reset');

let countNum = 0;
const min = 0;
const max = 10;

function updateNumber(){
  count.textContent = countNum;
  inc.disabled = (countNum >= max);
  rem.disabled = (countNum <= min);
}
rem.addEventListener('click', () => {
  countNum--;
  updateNumber();
})
inc.addEventListener('click', () => {
  countNum++;
  updateNumber();
})
reset.addEventListener('click', () => {
  countNum = 0;
  updateNumber();
})
updateNumber();