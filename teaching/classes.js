class Friend {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  present(){
    return `My Friend ${this.name} is ${this.age} years old.`
  }
}

const alex = new Friend('Alex', 18);
console.log(alex.present());