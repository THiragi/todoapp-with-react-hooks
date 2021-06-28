import { fizzBuzz, executor } from './fizzbuzz';

describe('FizzBuzz', () => {
  test('3の倍数を受け取るとFizzを返す', () => {
    expect(fizzBuzz(3)).toEqual('Fizz');
  });
  test('5の倍数を受け取るとBuzzを返す', () => {
    expect(fizzBuzz(5)).toEqual('Buzz');
  });
  test('15の倍数を受け取るとFizzBuzzを返す', () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
  });
  test('上記以外の数字はそのまま返す', () => {
    expect(fizzBuzz(7)).toEqual(7);
  });
});

describe('FizzBuzzExecutorは', () => {
  test('1から100までFizzBuzzする', () => {
    const fizzbuzz = jest.fn();
    executor(fizzbuzz)(1)(100);

    expect(fizzbuzz).toHaveBeenCalledTimes(100);
  });
});
