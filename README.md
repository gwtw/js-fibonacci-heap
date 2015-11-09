# js-fibonacci-heap  [![NPM version](https://img.shields.io/npm/v/@tyriar/fibonacci-heap.svg?style=flat)](https://www.npmjs.org/package/@tyriar/fibonacci-heap)

[![Build Status](http://img.shields.io/travis/Tyriar/js-fibonacci-heap.svg?style=flat)](http://travis-ci.org/Tyriar/js-fibonacci-heap) [![Coverage Status](https://img.shields.io/coveralls/Tyriar/js-fibonacci-heap.svg?branch=master&service=github)](https://coveralls.io/github/Tyriar/js-fibonacci-heap?branch=master)


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
