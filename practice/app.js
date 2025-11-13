const rem = document.querySelector('#rem');
const count = document.querySelector('#count');
const inc = document.querySelector('#inc');
const reset = document.querySelector('#reset');

let countNum = 0;

function updateNumber(){
  count.textContent = countNum;
}
rem.addEventListener('click', () => {
  countNum--;
  updateNumber()
})
inc.addEventListener('click', () => {
  countNum++;
  updateNumber()
})
reset.addEventListener('click', () => {
  countNum = 0;
  updateNumber()
})