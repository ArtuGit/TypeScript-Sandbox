class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}
   
let greeter = new Greeter("world");
console.log(greeter.greet())

class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();


class NamedAnimal extends Animal {
  public name: string;
  public constructor(theName: string) {
    super();
    this.name = theName;
  }
}

class Snake extends NamedAnimal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends NamedAnimal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
//console.log(howard.name);

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;

  constructor(theName: string) {
    this.name = theName;
  }
}

let dad = new Octopus("Man with the 8 strong legs");
//dad.name = "Man with the 3-piece suit";


// Employee can extend Person
class Employee2 extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard2 = new Employee2("Howard", "Sales");
let john = new Person("John");

class Greeter2 {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "Greeter2";
  }
}

class SpecialGreeter extends Greeter2 {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + this.getName());
  }

  getName() {
    return "SpecialGreeter";
  }
}
const g = new Greeter2();
const sg = new SpecialGreeter();
g.greet();
// g.getName(); // Wrong, protected
sg.greet();
sg.getName(); // OK, redeclared

class Base {
  protected m = 10;
}
class Derived extends Base {
  // No modifier, so default is 'public'
  m = 15;
}
const b = new Base();
// console.log(b.m); // Wrong, protected
const d = new Derived();
console.log(d.m); // OK, exposed

class Base2 {
  private x = 0;
}
const b2 = new Base2();
//console.log(b.x); // Can't access from outside the class

class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}
console.log(MyClass.x);
MyClass.printX();

class Box2 {
  contents: string = "";
  set(value: string) {
    this.contents = value;
    return this;
  }
}

class ClearableBox extends Box2 {
  clear() {
    this.contents = "";
  }
}

const a = new ClearableBox();
const b3 = a.set("hello");
console.log(b3)