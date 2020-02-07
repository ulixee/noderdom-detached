export function iterableIteratorForArray<T>(getArray: () => any[]) {
  let index = 0;
  const iterator = {
    next: () => {
      const array = getArray();
      const item = array[index];
      index += 1;
      return { value: item, done: index > array.length };
    },
    [Symbol.iterator](): IterableIterator<T> {
      return iterator;
    },
  };
  return iterator;
}
