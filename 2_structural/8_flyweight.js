class Car {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

class CarFactory {
  constructor() {
    this.cars = new Map();
  }


  create(model, price) {
    const candidate = this.getCar(model);
    if (candidate) {
      return candidate;
    }
    const newCar = new Car(model, price);

    this.cars.set(model, newCar);

    return newCar;
  }

  getCar(model) {
    return this.cars.get(model);
  }
}

const factory = new CarFactory();

const bmwX6 = factory.create('bmw', 10_000);
const audi = factory.create('audi', 12_000);
const bmwX3 = factory.create('bmw', 8_000);
// console.log(bmwX6);
// console.log(audi);
// console.log(bmwX3);

// console.log(bmwX6 === bmwX3);
