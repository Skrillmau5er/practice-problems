class Shape {
  name;
  sides;
  sideLength;

  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    const res = this.sides * this.sideLength;
    return res;
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super('square', 4, sideLength);
  }

  calcArea() {
    return this.sideLength * 2;
  }
}

const sq1 = new Square(4);

console.log(sq1.name);
