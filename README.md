# js-fibonacci-heap  [![NPM version](https://img.shields.io/npm/v/@tyriar/fibonacci-heap.svg?style=flat)](https://www.npmjs.org/package/@tyriar/fibonacci-heap)

[![Build Status](http://img.shields.io/travis/Tyriar/js-fibonacci-heap.svg?style=flat)](http://travis-ci.org/Tyriar/js-fibonacci-heap) [![Coverage Status](https://img.shields.io/coveralls/Tyriar/js-fibonacci-heap.svg?branch=master&service=github)](https://coveralls.io/github/Tyriar/js-fibonacci-heap?branch=master)

A JavaScript implementation of the [Fibonacci heap](http://www.growingwiththeweb.com/2014/06/fibonacci-heap.html) data structure.



## Operation time complexity

| Operation        | Complexity |
|------------------|------------|
| `clear`          | Θ(1)\*     |
| `decreaseKey`    | Θ(1)\*     |
| `delete`         | O(log n)\* |
| `extractMinimum` | O(log n)\* |
| `findMinimum`    | Θ(1)       |
| `insert`         | Θ(1)       |
| `isEmpty`        | Θ(1)       |
| `size`           | Θ(n)       |
| `union`          | Θ(1)       |

\* amortised



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



## License

MIT © [Daniel Imms](http://www.growingwiththeweb.com)
