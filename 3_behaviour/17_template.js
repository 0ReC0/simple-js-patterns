class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  responsibilities() {
  }

  work() {
    return `${ this.name } do ${ this.responsibilities() }`;
  }

  getPaid() {
    return `${ this.name } have salary ${ this.salary }`;
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return `constructing programs`;
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return `testing programs`;
  }
}

const dev = new Developer('Sergei', 100_000);
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Vike', 90_000);
console.log(tester.getPaid())
console.log(tester.work())
