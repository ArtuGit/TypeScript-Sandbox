type Box<Type> = {
  contents: Type;
};

const sBox: Box<string> = {
  contents: 'String'
};

type OrNull<Type> = Type | null;

type OneOrMany<Type> = Type | Type[];

type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;

type OneOrManyOrNull2<Type> = OneOrMany<Type> | null;

type OneOrManyOrNullStrings = OneOrManyOrNull<string>;

type OneOrManyOrNullStrings2 = OneOrMany<string> | null;
