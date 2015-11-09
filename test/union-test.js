import test from 'ava';
import FibonacciHeap from '../';

test('should union the 2 heaps together given 2 heaps of size 5 with overlapping elements added in order together', t => {
  var heap = new FibonacciHeap();
  heap.insert(0, null);
  heap.insert(2, null);
  heap.insert(4, null);
  heap.insert(6, null);
  heap.insert(8, null);
  var other = new FibonacciHeap();
  other.insert(1, null);
  other.insert(3, null);
  other.insert(5, null);
  other.insert(7, null);
  other.insert(9, null);
  t.is(heap.size(), 5);
  t.is(other.size(), 5);

  heap.union(other);
  t.is(heap.size(), 10);
  for (var i = 0; i < 10; i++) {
    t.is(heap.extractMinimum().key, i);
  }
  t.true(heap.isEmpty());
  t.end();
});

test('should union the 2 heaps together given 2 heaps of size 5 with overlapping elements added in reverse order together', t => {
  var heap = new FibonacciHeap();
  heap.insert(9, null);
  heap.insert(7, null);
  heap.insert(5, null);
  heap.insert(3, null);
  heap.insert(1, null);
  var other = new FibonacciHeap();
  other.insert(8, null);
  other.insert(6, null);
  other.insert(4, null);
  other.insert(2, null);
  other.insert(0, null);
  t.is(heap.size(), 5);
  t.is(other.size(), 5);

  heap.union(other);
  t.is(heap.size(), 10);
  for (var i = 0; i < 10; i++) {
    t.is(heap.extractMinimum().key, i);
  }
  t.true(heap.isEmpty());
  t.end();
});

test('should union the 2 heaps together', t => {
  var heaps = constructJumbledHeaps(t);
  heaps[0].union(heaps[1]);
  t.is(heaps[0].size(), 10);
  for (var i = 0; i < 10; i++) {
    t.is(heaps[0].extractMinimum().key, i);
  }
  t.true(heaps[0].isEmpty());
  t.end();
});

test('should union the 2 heaps together after extracting the minimum from each', t => {
  var heaps = constructJumbledHeaps(t);
  t.is(heaps[0].extractMinimum().key, 1);
  t.is(heaps[1].extractMinimum().key, 0);
  heaps[0].union(heaps[1]);
  t.is(heaps[0].size(), 8);
  for (var i = 2; i < 10; i++) {
    t.is(heaps[0].extractMinimum().key, i);
  }
  t.true(heaps[0].isEmpty());
  t.end();
});

function constructJumbledHeaps(t) {
  var first = new FibonacciHeap();
  first.insert(9, null);
  first.insert(2, null);
  first.insert(6, null);
  first.insert(1, null);
  first.insert(3, null);
  t.is(first.size(), 5);
  var second = new FibonacciHeap();
  second.insert(4, null);
  second.insert(8, null);
  second.insert(5, null);
  second.insert(7, null);
  second.insert(0, null);
  t.is(second.size(), 5);
  return [first, second];
}
