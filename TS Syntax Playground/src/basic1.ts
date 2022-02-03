function add(n1: number, n2: number): number {
  return n1 + n2;
}

let res;

res = add(1, 1);
console.log('add', res);
// res = add('1', 1); //error

// No type annotations here, but TypeScript can spot the bug
const names = ['Alice', 'Bob', 'Eve'];

names.forEach((s) => {
  console.log(s.toUpperCase());
});

type StrNum = number | string

const strNum1: StrNum = 1
//const strNum12: StrNum = true //error
