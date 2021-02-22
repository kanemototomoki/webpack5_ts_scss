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

const years: number[] = [2020, 2021];
// tuple
const user: [string, number] = ['tom', 21];

const map = new Map<string, number>([
  ['takashi', 31],
  ['daiki', 11],
]);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

type Person2 = {
  name: string;
  favorite: string;
};

// Partial(ユーティリティ)を使用すると省略できる
const wzz: Partial<Person2> = { name: "foo" };

// Readonly(ユーティリティ)で要素の書き換えを不可に
const boo: Readonly<Person2> = { name: "foo", favorite: 'bar' };

// APIのレスポンスなどの場合に使える(keyが可変の文字列だったり)
const postalCode: { [key: string]: string } = {
  "602-0000": "京都市上京区",
  "602-0827": "京都市上京区相生町",
  "602-0828": "京都市上京区愛染寺町",
  "602-0054": "京都市上京区飛鳥井町",
};

// AかつB
type Twitter = {
  twitterId: string;
};

type Instagram = {
  instagramId: string;
};

const someUser: Twitter & Instagram = {
  twitterId: 'foo',
  instagramId: 'bar',
};

// 型合成もできる
type Sns = Twitter & Instagram;

const someUser2: Sns = {
  twitterId: 'foo',
  instagramId: 'bar',
};
