export class FizzBuzz {
  public execute(i: number) {
    if (i % 3 === 0 && i % 5 === 0) return 'FizzBuzz';
    if (i % 3 === 0) return 'Fizz';
    if (i % 5 === 0) return 'Buzz';

    return i;
  }
}

export class FizzBuzzExecutor {
  private receptor: FizzBuzzReceptor;
  constructor(receptor: FizzBuzzReceptor) {
    this.receptor = receptor;
  }
  public execute(start: number, end: number) {
    for (var count = start; count <= end; count++) {
      this.receptor.execute(count);
    }
  }
}

export interface FizzBuzzReceptor {
  execute(i: number): number | string;
}
