import test from 'ava';
import FibonacciHeap from '../';

test('should throw an exception given a non-existent node', t => {
  var heap = new FibonacciHeap();
  t.throws(() => {
    heap.decreaseKey(undefined, 2);
  });
  t.end();
});

test('should throw an exception given a new key larger than the old key', t => {
  var heap = new FibonacciHeap();
  t.throws(() => {
    var node = heap.insert(1, null);
    heap.decreaseKey(node, 2);
  });
  t.end();
});

test('should decrease the minimum node', t => {
  var heap = new FibonacciHeap();
  var node1 = heap.insert(1, null);
  heap.insert(2, null);
  heap.decreaseKey(node1, -3);
  var key = heap.findMinimum().key;
  t.same(key, node1.key);
  t.is(key, -3);
  t.end();
});

test('should decrease and bubble up a non-minimum node', t => {
  var heap = new FibonacciHeap();
  heap.insert(1, null);
  var node2 = heap.insert(2, null);
  heap.decreaseKey(node2, -3);
  var key = heap.findMinimum().key;
  t.same(key, node2.key);
  t.is(key, -3);
  t.end();
});

test('should decrease and bubble up a non-minimum node in a large heap', t => {
  var heap = new FibonacciHeap();
  heap.insert(13, null);
  heap.insert(26, null);
  heap.insert(3, null);
  heap.insert(-6, null);
  var node5 = heap.insert(27, null);
  heap.insert(88, null);
  heap.insert(59, null);
  heap.insert(-10, null);
  heap.insert(16, null);
  heap.decreaseKey(node5, -11);
  t.same(heap.findMinimum().key, node5.key);
  t.end();
});

test('should leave a valid tree on a flat Fibonacci heap', t => {
  var heap = new FibonacciHeap();
  heap.insert(13, null);
  heap.insert(26, null);
  heap.insert(3, null);
  heap.insert(-6, null);
  heap.insert(27, null);
  var node6 = heap.insert(88, null);
  heap.insert(59, null);
  heap.insert(-10, null);
  heap.insert(16, null);
  heap.decreaseKey(node6, -8);
  t.same(heap.extractMinimum().key, -10);
  t.same(heap.extractMinimum().key, -8);
  t.same(heap.extractMinimum().key, -6);
  t.same(heap.extractMinimum().key, 3);
  t.same(heap.extractMinimum().key, 13);
  t.same(heap.extractMinimum().key, 16);
  t.same(heap.extractMinimum().key, 26);
  t.same(heap.extractMinimum().key, 27);
  t.same(heap.extractMinimum().key, 59);
  t.end();
});

test('should leave a valid tree on a consolidated Fibonacci heap', t => {
  var heap = new FibonacciHeap();
  var node0 = heap.insert(0, null);
  var node1 = heap.insert(1, null);
  var node2 = heap.insert(2, null);
  var node3 = heap.insert(3, null);
  var node4 = heap.insert(4, null);
  var node5 = heap.insert(5, null);
  var node6 = heap.insert(6, null);
  var node7 = heap.insert(7, null);
  var node8 = heap.insert(8, null);

  // Extracting minimum should trigger consolidate.
  //
  //                                    __1
  //                                   / /|
  //                                  5 3 2
  //  0--1--2--3--4--5--6--7--8  ->  /| |
  //                                7 6 4
  //                                |
  //                                8
  //
  t.is(heap.extractMinimum(), node0);

  // Decrease node 8 to 0
  //
  //      __1
  //     / /|        __1--0
  //    5 3 2       / /|
  //   /| |    ->  5 3 2
  //  7 6 4       /| |
  //  |          7 6 4
  //  8
  //
  heap.decreaseKey(node8, 0);
  t.true(node1.next === node8);

  t.is(heap.size(), 8);
  t.true(heap.extractMinimum() === node8);
  t.true(heap.extractMinimum() === node1);
  t.true(heap.extractMinimum() === node2);
  t.true(heap.extractMinimum() === node3);
  t.true(heap.extractMinimum() === node4);
  t.true(heap.extractMinimum() === node5);
  t.true(heap.extractMinimum() === node6);
  t.true(heap.extractMinimum() === node7);
  t.true(heap.isEmpty());
  t.end();
});
