import test from 'ava';
import FibonacciHeap from '../';

test('should delete the head of the heap', t => {
  var heap = new FibonacciHeap();
  var node1 = heap.insert(1, null);
  var node2 = heap.insert(2, null);
  heap.delete(node1);
  t.is(heap.extractMinimum(), node2);
  t.true(heap.isEmpty());
  t.end();
});

test('should delete nodes in a flat Fibonacci heap', t => {
  var heap = new FibonacciHeap();
  var node3 = heap.insert(13, null);
  var node4 = heap.insert(26, null);
  var node2 = heap.insert(3, null);
  var node1 = heap.insert(-6, null);
  var node5 = heap.insert(27, null);
  t.is(heap.size(), 5);
  heap.delete(node3);
  t.is(heap.size(), 4);
  t.is(heap.extractMinimum(), node1);
  t.is(heap.extractMinimum(), node2);
  t.is(heap.extractMinimum(), node4);
  t.is(heap.extractMinimum(), node5);
  t.true(heap.isEmpty());
  t.end();
});

test('should cut the node from the tree if the node is not the minimum it does not have a grandparent', t => {
  var heap = new FibonacciHeap();
  var node1 = heap.insert(1, null);
  var node2 = heap.insert(2, null);
  var node3 = heap.insert(3, null);
  var node4 = heap.insert(4, null);
  // Extract the minimum, forcing the construction of an order 2 tree which
  // is changed to an order 0 and order 1 tree after the minimum is extracted.
  //
  //                    1
  //                   /|      3--2
  //  1--2--3--4  ->  3 2  ->  |
  //                  |        4
  //                  4
  //
  t.is(heap.extractMinimum(), node1);
  // Deleting the node should trigger a cut and cascadingCut on the heap.
  heap.delete(node4);

  t.is(heap.size(), 2);
  t.is(heap.extractMinimum(), node2);
  t.is(heap.extractMinimum(), node3);
  t.true(heap.isEmpty());
  t.end();
});

test('should cut the node from the tree if the node is not the minimum and it has a grandparent', t => {
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

  // extractMinimum on 0 should trigger a cut and cascadingCut on the heap.
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

  // Delete node 8
  //
  //      __1
  //     / /|        __1
  //    5 3 2       / /|
  //   /| |    ->  5 3 2
  //  7 6 4       /| |
  //  |          7 6 4
  //  8
  //
  heap.delete(node8);

  t.is(heap.size(), 7);
  t.is(heap.extractMinimum(), node1);
  t.is(heap.extractMinimum(), node2);
  t.is(heap.extractMinimum(), node3);
  t.is(heap.extractMinimum(), node4);
  t.is(heap.extractMinimum(), node5);
  t.is(heap.extractMinimum(), node6);
  t.is(heap.extractMinimum(), node7);
  t.true(heap.isEmpty());
  t.end();
});

test('should cut the node from the tree if the node is not the minimum, it has a grandparent and its parent is marked', t => {
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

  // Delete node 6, marking 5
  //
  //      __1         __1
  //     / /|        / /|
  //    5 3 2      >5 3 2
  //   /| |    ->  /  |
  //  7 6 4       7   4
  //  |           |
  //  8           8
  //
  heap.delete(node6);
  t.true(node5.isMarked);

  // Delete node 7, cutting the sub-tree
  //
  //      __1
  //     / /|        1--5
  //   >5 3 2       /|  |
  //   /  |    ->  3 2  8
  //  7   4        |
  //  |            4
  //  8
  //
  heap.delete(node7);
  t.true(node5.next === node1);
  t.true(node2.next === node3);
  t.true(node3.next === node2);

  t.is(heap.size(), 6);
  t.true(heap.extractMinimum() === node1);
  t.true(heap.extractMinimum() === node2);
  t.true(heap.extractMinimum() === node3);
  t.true(heap.extractMinimum() === node4);
  t.true(heap.extractMinimum() === node5);
  t.true(heap.extractMinimum() === node8);
  t.true(heap.isEmpty());
  t.end();
});

test('should correctly assign an indirect child when a direct child is cut from the parent', t => {
  var heap = new FibonacciHeap();
  var node0 = heap.insert(0, null);
  heap.insert(1, null);
  heap.insert(2, null);
  heap.insert(3, null);
  heap.insert(4, null);
  var node5 = heap.insert(5, null);
  var node6 = heap.insert(6, null);
  var node7 = heap.insert(7, null);
  heap.insert(8, null);

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

  // Delete node 6, marking 5
  //
  //      __1         __1
  //     / /|        / /|
  //    5 3 2      >5 3 2
  //   /| |    ->  /  |
  //  7 6 4       7   4
  //  |           |
  //  8           8
  //
  heap.delete(node6);
  t.true(node5.child === node7);
  t.end();
});
