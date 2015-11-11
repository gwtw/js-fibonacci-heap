# js-fibonacci-heap  [![NPM version](https://img.shields.io/npm/v/@tyriar/fibonacci-heap.svg?style=flat)](https://www.npmjs.org/package/@tyriar/fibonacci-heap)

[![Build Status](http://img.shields.io/travis/Tyriar/js-fibonacci-heap.svg?style=flat)](http://travis-ci.org/Tyriar/js-fibonacci-heap) [![Coverage Status](https://img.shields.io/coveralls/Tyriar/js-fibonacci-heap.svg?branch=master&service=github)](https://coveralls.io/github/Tyriar/js-fibonacci-heap?branch=master)

A JavaScript implementation of the [Fibonacci heap](http://www.growingwiththeweb.com/2014/06/fibonacci-heap.html) data structure.

![](http://www.growingwiththeweb.com/images/2014/06/15/fibonacci-heap.svg)

## Install

```bash
npm install --save @tyriar/fibonacci-heap
```

## Usage

```javascript
var FibonacciHeap = require("@tyriar/fibonacci-heap");

var heap = new FibonacciHeap();
heap.insert(3);
heap.insert(7);
heap.insert(8);
heap.insert(1);
heap.insert(2);

while (!heap.isEmpty()) {
  console.log(heap.extractMinimum());
}
```

## Operation time complexity

| Operation      | Complexity |
| -------------- | ---------- |
| clear          | Θ(1)\*     |
| decreaseKey    | Θ(1)\*     |
| delete         | O(log n)\* |
| extractMinimum | O(log n)\* |
| findMinimum    | Θ(1)       |
| insert         | Θ(1)       |
| isEmpty        | Θ(1)       |
| size           | Θ(n)       |
| union          | Θ(1)       |

\* amortized

## API

### FibonacciHeap

Creates a Fibonacci heap.

**Parameters**

-   `customCompare` **function** An optional custom node comparison
    function.

#### clear

Clears the heap's data, making it an empty heap.

#### decreaseKey

Decreases a key of a node.

**Parameters**

-   `node` **Node** The node to decrease the key of.
-   `newKey` **Object** The new key to assign to the node.

#### delete

Deletes a node.

**Parameters**

-   `node` **Node** The node to delete.

#### extractMinimum

Extracts and returns the minimum node from the heap.

Returns **Node** node The heap's minimum node or undefined if the heap is
empty.

#### findMinimum

Returns the minimum node from the heap.

Returns **Node** node The heap's minimum node or undefined if the heap is
empty.

#### insert

Inserts a new key-value pair into the heap.

**Parameters**

-   `key` **Object** The key to insert.
-   `value` **Object** The value to insert.

Returns **Node** node The inserted node.

#### isEmpty

Returns **boolean** Whether the heap is empty.

#### size

Returns **number** The size of the heap.

#### union

Joins another heap to this heap.

**Parameters**

-   `otherHeap` **BinaryHeap** The other heap.
-   `other`  
