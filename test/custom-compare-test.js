import test from 'ava';
import FibonacciHeap from '../';

test('should give a min heap given a non-reverse customCompare', t => {
  var heap = new FibonacciHeap(function (a, b) {
    return a.key - b.key;
  });
  var node3 = heap.insert(13, null);
  var node4 = heap.insert(26, null);
  var node2 = heap.insert(3, null);
  var node1 = heap.insert(-6, null);
  var node5 = heap.insert(27, null);
  t.is(heap.size(), 5);
  t.same(heap.extractMinimum().key, node1.key);
  t.same(heap.extractMinimum().key, node2.key);
  t.same(heap.extractMinimum().key, node3.key);
  t.same(heap.extractMinimum().key, node4.key);
  t.same(heap.extractMinimum().key, node5.key);
  t.true(heap.isEmpty());
  t.end();
});

test('should give a max heap given a reverse customCompare', t => {
  var heap = new FibonacciHeap(function (a, b) {
    return b.key - a.key;
  });
  var node3 = heap.insert(13, null);
  var node4 = heap.insert(26, null);
  var node2 = heap.insert(3, null);
  var node1 = heap.insert(-6, null);
  var node5 = heap.insert(27, null);
  t.is(heap.size(), 5);
  t.same(heap.extractMinimum().key, node5.key);
  t.same(heap.extractMinimum().key, node4.key);
  t.same(heap.extractMinimum().key, node3.key);
  t.same(heap.extractMinimum().key, node2.key);
  t.same(heap.extractMinimum().key, node1.key);
  t.true(heap.isEmpty());
  t.end();
});
