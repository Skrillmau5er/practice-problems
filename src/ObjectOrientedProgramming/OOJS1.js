export class Shape {
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
    console.log(res);
  }
}

const sqaure = new Shape('square', 4, 5);
sqaure.calcPerimeter();

const triangle = new Shape('triangle', 3, 3);
triangle.calcPerimeter();
