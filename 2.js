#!/usr/local/bin/node

require('net')
  .connect(4321, 'localhost')
  .on('data', d => console.log(String(d)))
  .end('GET / HTTP/1.1\nContent-Length:4\n\nkaka');
