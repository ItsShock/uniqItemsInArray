const uniqArray = require('..');

describe('Funkcja uniqArray', () => {
  it('powinna zwrócić tablicę', async () => {
    const result = uniqArray([1]);

    expect(Array.isArray(result)).toBeTruthy();
  });

  it('nie powinna modyfikować przekazywanego parametru', async () => {
    const array = [1, 2, 3];
    const arrayCopy = [...array];
    uniqArray(array);
  
    expect(array).toEqual(arrayCopy);
  });

  it('powinna zwracać jedną tablicę z unikalnymi wartościami', async () => {
    expect(uniqArray([1, 1, 1])).toEqual([1]);
    expect(uniqArray([1, 1, 2, 2, 3, 3, 4, 4])).toEqual([1, 2, 3, 4]);
    expect(uniqArray([null, null, null, 0, 0, 0, -1, -1, undefined, undefined])).toEqual([null, 0, -1, undefined]);
    expect(uniqArray([1, -1, 1, -1, 1, -1, 1])).toEqual([1, -1]);
    expect(uniqArray([0, false, false, 0])).toEqual([0, false]);
    expect(uniqArray([])).toEqual([]);
  });
});
