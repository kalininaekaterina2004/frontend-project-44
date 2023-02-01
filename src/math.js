export const magicNumbers = (min = 1, max = 70) => {
  const minimal = Math.ceil(min);
  const maximum = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (maximum - minimal + 1)) + minimal;
  return randomNumber;
};

export const calculator = (x, y, oper) => {
  let result = 0;
  if (oper === '+') result = x + y;
  if (oper === '-') result = x - y;
  if (oper === '*') result = x * y;
  return result;
};
export const getOperator = (array) => {
  const index = Math.floor(Math.random() * array.length);
  const operator = array[index];
  return operator;
};
export const getDivisor = (a, b) => {
  let x = a;
  let y = b;
  while (x !== y) {
    if (x > y) {
      x -= y;
    } else {
      y -= x;
    }
  }
  return x;
};

export const progress = (a, d) => {
  let result = '';
  const length = magicNumbers(5, 10);
  const desired = magicNumbers(1, length - 1);
  for (let i = 0; i < length; i += 1) {
    const formula = (a + (d * i));
    result += (i !== desired) ? `${formula} ` : '.. ';
  }
  return result;
};

export const letprogress = (str) => {
  const sort = str.split(' ');
  const indexSearch = sort.indexOf('..');
  const prevNumber = parseInt(sort[indexSearch - 1], 10);
  const nextNumber = parseInt(sort[indexSearch + 1], 10);
  const solve = (prevNumber + nextNumber) / 2;
  return `${solve}`;
};
export const isPrime = (number) => {
  const primal = [2, 1367];
  return (primal.includes(number)) ? 'yes' : 'no';
};
