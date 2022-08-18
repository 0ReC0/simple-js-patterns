// Open Close Principle

class Shape {
  area() {
    throw new Error('Area method should be implemented');
  }
}

class Square extends Shape {
  constructor(size) {
    super();
    this.size = size;
  }

  area() {
    return this.size ** 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * (this.radius ** 2);
  }
}

class Rect extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(a, b, c) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
  }

  area() {
    return this.a * this.b * this.c;
  }
}

class AreaCalculator {
  constructor(shapes = []) {
    this.shapes = shapes;
  }

  sum() {
    return this.shapes.reduce((acc, shape) => {
      acc += shape.area();
      return acc;
    }, 0);
  }
}

const areaCalculator = new AreaCalculator(
  [
    new Circle(2),
    new Square(3),
    new Rect(2, 2),
    new Triangle(2, 2, 2),
  ]
);
console.log(areaCalculator.sum());
