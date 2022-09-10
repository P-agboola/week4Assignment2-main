class Shape {
  constructor(type) {
    this.type = type;
  }
  getType() {
    return `This is a ${this.type}`;
  }
}

class Triangle extends Shape {
  constructor(type, a, b, c) {
    super(type), (this.a = a), (this.b = b), (this.c = c);
  }
  getPerimeter() {
    const result = this.a + this.b + this.c;
    return result;
  }
}

const triangle = new Triangle("triangle", 4, 5, 6);

console.log(triangle.getPerimeter());
console.log(triangle.getType());
