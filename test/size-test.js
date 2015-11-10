import test from 'ava';
import FibonacciHeap from '../';

test('should return the size of the heap', t => {
  var heap = new FibonacciHeap();
  t.is(heap.size(), 0);
  heap.insert(1, null);
  t.is(heap.size(), 1);
  heap.insert(2, null);
  t.is(heap.size(), 2);
  heap.insert(3, null);
  t.is(heap.size(), 3);
  heap.insert(4, null);
  t.is(heap.size(), 4);
  heap.insert(5, null);
  t.is(heap.size(), 5);
  heap.insert(6, null);
  t.is(heap.size(), 6);
  heap.insert(7, null);
  t.is(heap.size(), 7);
  heap.insert(8, null);
  t.is(heap.size(), 8);
  heap.insert(9, null);
  t.is(heap.size(), 9);
  heap.insert(10, null);
  t.is(heap.size(), 10);
  t.end();
});
