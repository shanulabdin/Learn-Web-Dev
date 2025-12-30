const name = 'shan';
let age = 26;

function callName(){
  if(age > 18){
    console.log(name + ' is an adult.');
  } else {
    console.log(name + ' is a minor.');
  }
}

callName();