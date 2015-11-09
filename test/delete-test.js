import test from 'ava';
import FibonacciHeap from '../';

test('should delete the head of the heap', t => {
  var heap = new FibonacciHeap();
  var node1 = heap.insert(1, null);
  var node2 = heap.insert(2, null);
  heap.delete(node1);
  t.same(heap.extractMinimum(), node2);
  t.true(heap.isEmpty());
  t.end();
});

test('should delete a node in the middle of the heap', t => {
  var heap = new FibonacciHeap();
  var node3 = heap.insert(13, null);
  var node4 = heap.insert(26, null);
  var node2 = heap.insert(3, null);
  var node1 = heap.insert(-6, null);
  var node5 = heap.insert(27, null);
  t.is(heap.size(), 5);
  heap.delete(node3);
  t.is(heap.size(), 4);
  t.same(heap.extractMinimum().key, node1.key);
  t.same(heap.extractMinimum().key, node2.key);
  t.same(heap.extractMinimum().key, node4.key);
  t.same(heap.extractMinimum().key, node5.key);
  t.true(heap.isEmpty());
  t.end();
});
