const assert = require('assert');
const towlSort = require('../src/index');

describe('.towlSort, should perfrom \'towlSort\'', () => {

  it('Should return empty array if no params passed', () => {
    assert.deepEqual(towlSort(), []);
  });

  it('Should return empty array if matrix is empty', () => {
    assert.deepEqual(towlSort([]), []);
  });

  it('should do towlSort', () => {
    const matrix = [
      [1, 2],
      [3, 4],];

    assert.deepEqual(towlSort(matrix), [ 1, 2, 4, 3 ]);
  });

  it('should do towlSort', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],];

    assert.deepEqual(towlSort(matrix), [ 1, 2, 3, 6, 5, 4, 7, 8, 9 ]);
  });

  it('should do towlSort', () => {
    const matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],];

    assert.deepEqual(towlSort(matrix), [ 1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12, 16, 15, 14, 13 ]);
  });

  it('should do towlSort correctrly with nonsquare matrix', () => {
    const matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],];

    assert.deepEqual(towlSort(matrix), [ 1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12,]);
  });

  it('should do towlSort', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],];

    assert.deepEqual(towlSort(matrix), [ 1, 2, 3, 6, 5, 4, ]);
  });

  it('should do towlSort', () => {
    const matrix = [
        [1, 2, 4],
        [5, 6, 7, 8],
        [9, 12],];

    assert.deepEqual(towlSort(matrix), [ 1, 2, 4, 8, 7, 6, 5, 9, 12 ]);});
});