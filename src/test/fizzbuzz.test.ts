import { FizzBuzz, FizzBuzzExecutor } from './fizzbuzz';

describe('FizzBuzz', () => {
  test('3の倍数を受け取るとFizzを返す', () => {
    expect(new FizzBuzz().execute(3)).toEqual('Fizz');
  });
  test('5の倍数を受け取るとBuzzを返す', () => {
    expect(new FizzBuzz().execute(5)).toEqual('Buzz');
  });
  test('15の倍数を受け取るとFizzBuzzを返す', () => {
    expect(new FizzBuzz().execute(15)).toEqual('FizzBuzz');
  });
  test('上記以外の数字はそのまま返す', () => {
    expect(new FizzBuzz().execute(7)).toEqual(7);
  });
});

describe('FizzBuzzExecutorは', () => {
  test('1から100までFizzBuzzする', () => {
    const fizzBuzz = {} as FizzBuzz;
    const execute = jest.fn();
    fizzBuzz.execute = execute;
    new FizzBuzzExecutor(fizzBuzz).execute(1, 100);

    expect(execute).toHaveBeenCalledTimes(100);
  });
});
