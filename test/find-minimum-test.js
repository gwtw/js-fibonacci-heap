import test from 'ava';
import FibonacciHeap from '../';

test('should return the minimum item from the heap', t => {
  var heap = new FibonacciHeap();
  heap.insert(5, null);
  heap.insert(3, null);
  heap.insert(1, null);
  heap.insert(4, null);
  heap.insert(2, null);
  t.is(heap.findMinimum().key, 1);
  t.end();
});
