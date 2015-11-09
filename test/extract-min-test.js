import test from 'ava';
import FibonacciHeap from '../';

test('extract-min should return undefined on an empty heap', t => {
  var heap = new FibonacciHeap();
  t.is(heap.extractMinimum(), undefined);
  t.end();
});

test('should extract the minimum item from a heap', t => {
  var heap = new FibonacciHeap();
  var node5 = heap.insert(5, null);
  var node3 = heap.insert(3, null);
  var node4 = heap.insert(4, null);
  var node1 = heap.insert(1, null);
  var node2 = heap.insert(2, null);
  t.same(heap.extractMinimum().key, node1.key);
  t.same(heap.extractMinimum().key, node2.key);
  t.same(heap.extractMinimum().key, node3.key);
  t.same(heap.extractMinimum().key, node4.key);
  t.same(heap.extractMinimum().key, node5.key);
  t.end();
});

test('should extract the minimum item from a jumbled heap', t => {
  var heap = new FibonacciHeap();
  var node1 = heap.insert(1, null);
  var node4 = heap.insert(4, null);
  var node3 = heap.insert(3, null);
  var node5 = heap.insert(5, null);
  var node2 = heap.insert(2, null);
  t.same(heap.extractMinimum().key, node1.key);
  t.same(heap.extractMinimum().key, node2.key);
  t.same(heap.extractMinimum().key, node3.key);
  t.same(heap.extractMinimum().key, node4.key);
  t.same(heap.extractMinimum().key, node5.key);
  t.end();
});

test('should extract the minimum item from a heap containing negative items', t => {
  var heap = new FibonacciHeap();
  var node1 = heap.insert(-9, null);
  var node4 = heap.insert(6, null);
  var node3 = heap.insert(3, null);
  var node5 = heap.insert(10, null);
  var node2 = heap.insert(-4, null);
  t.same(heap.extractMinimum().key, node1.key);
  t.same(heap.extractMinimum().key, node2.key);
  t.same(heap.extractMinimum().key, node3.key);
  t.same(heap.extractMinimum().key, node4.key);
  t.same(heap.extractMinimum().key, node5.key);
  t.end();
});
