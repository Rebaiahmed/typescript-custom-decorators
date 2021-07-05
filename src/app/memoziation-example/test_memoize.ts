const memoizee = require('memoizee');

function add(a: number, b: number): number {
  console.log('add is called');
  return a + b;
}

const memoizedAdd = memoizee(add);

memoizedAdd(1, 2);
memoizedAdd(1, 2);
memoizedAdd(1, 3);
