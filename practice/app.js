const rem = document.querySelector('#rem');
const count = document.querySelector('#count');
const inc = document.querySelector('#inc');

let countNum = 0;

rem.addEventListener('click', () => {
  countNum--;
  count.textContent = countNum;
})
inc.addEventListener('click', () => {
  countNum++;
  count.textContent = countNum;
})