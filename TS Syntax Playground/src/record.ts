type Person3 = {
  name: string;
  age: number;
  address: string;
};

type Employee3 = {
  jobTitle: string;
  department: string;
};

type PersonRecord = Record<keyof Person3, string>;

const personRecord: PersonRecord = {
  name: 'John Doe',
  age: '30', // Using string for simplicity, should be a number in practice
  // age2: 45, //error
  address: '123 Main Street'
};

console.log({ personRecord });

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' }
  // tom: { age: 6, breed: "Street" },
};

console.log({ cats });
