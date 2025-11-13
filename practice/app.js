const rem = document.querySelector('#rem');
const count = document.querySelector('#count');
const inc = document.querySelector('#inc');
const reset = document.querySelector('#reset');

const key = 'counter:value';

let countNum = (localStorage.getItem(key)) || 0;

const min = 0;
const max = 10;

function updateNumber(){
  count.textContent = countNum;
  inc.disabled = (countNum >= max);
  rem.disabled = (countNum <= min);
}

function setCount(nextNum){
  countNum = nextNum;
  localStorage.setItem(key, countNum);
  updateNumber();
}

rem.addEventListener('click', () => {
  if(countNum > min){
    setCount(countNum - 1);
  }
})

inc.addEventListener('click', () => {
  if(countNum < max){
    setCount(countNum + 1);
  }
})

reset.addEventListener('click', () => {
  setCount(0);
})

updateNumber();