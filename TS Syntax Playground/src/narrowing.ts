interface Square {
  kind: 'square';
  sideLength: number;
}

interface Circle {
  kind: 'circle';
  radius: number;
}

type Shape = Square | Circle;

function isSquare(shape: Shape): shape is Square {
  return shape.kind === 'square';
}

function calculateArea(shape: Shape) {
  assertShape(shape);

  if (isSquare(shape)) {
    console.log(shape.sideLength ** 2);
  } else {
    console.log(Math.PI * shape.radius ** 2);
  }
}

function isCircle(shape: Shape): shape is Circle {
  return shape.kind === 'circle';
}

function assertShape(shape: Shape): asserts shape is Shape {
  // This function has a return type of `asserts shape is Shape`,
  // which tells TypeScript to narrow down the type of `shape`
  // within the block where the assertion function is called.
  if (!isSquare(shape) && !isCircle(shape)) {
    throw new Error('Invalid shape');
  }
}

calculateArea({ kind: 'square', sideLength: 10 }); // Output: 100
calculateArea({ kind: 'circle', radius: 10 }); // Output: 314.1592653589793
