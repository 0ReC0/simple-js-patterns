const car = {
  wheels: 4,

  init() {
    console.log(`I have ${this.wheels} wheels, their owner is ${this.owner}`)
  }
};

const carWithOwner = Object.create(car, {
  owner: {
    value: 'Dima'
  }
});
carWithOwner.init();
