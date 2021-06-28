export const fizzBuzz = (i: number) => {
  if (i % 3 === 0 && i % 5 === 0) return 'FizzBuzz';
  if (i % 3 === 0) return 'Fizz';
  if (i % 5 === 0) return 'Buzz';

  return i;
};

export const executor =
  (fnc: (i: number) => string | number) => (start: number) => (end: number) => {
    const len = end - start + 1;
    const args = [...Array(len)].map((_, index) => index + start);
    const result = args.map((arg) => fnc(arg));

    return result;
  };
