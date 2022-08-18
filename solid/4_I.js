// Interface segregation principle

class Animal {
  constructor(name) {
    this.name = name;
  }
}

const walker = {
  walk() {
    console.log('walk', this.name)
  }
}
const swimmer = {
  swim() {
    console.log('Swim', this.name)
  }
}
const flier = {
  fly() {
    console.log('fly', this.name)
  }
}


class Dog extends Animal {
}

class Eagle extends Animal {
}

class Whale extends Animal {
}

Object.assign(Dog.prototype, swimmer, walker);
Object.assign(Eagle.prototype, flier, walker);
Object.assign(Whale.prototype, swimmer);

const dog = new Dog('Rex');
dog.walk();
dog.swim();
// dog.fly();

const eagle = new Eagle('Eagle');
eagle.walk();
// eagle.swim();
eagle.fly();

const whale = new Whale('Whale');
// whale.walk();
whale.swim();
// whale.fly();
