import '@/css/main.scss';

const sum = (a: number, b: number): number => {
  return a + b;
};


const num: number = sum(10, 50);
console.log(num);


type Person = {
  name: string;
  age: number;
  favorite?: string;
}

const takashi: Person = {
  name: 'takashi',
  age: 24,
  favorite: '芋',
};

const showFullName = (person: Person): string => {
  const { name, age, favorite } = person;
  return favorite
    ? `${name}は${age}歳です。好きなものは${favorite}です。`
    : `${name}は${age}歳です。`;
};

console.log(showFullName(takashi));
