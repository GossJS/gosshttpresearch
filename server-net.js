#!/usr/local/bin/node

const resp =
`HTTP/1.1 200 OK
Content-Type: text/plain; charset=utf-8
Content-Length: 5

Hello
`;
require('net')
  .Server(sock => sock.on('data', (d => console.log(String(d)) || sock.end(resp))))
  .listen(4321); 
