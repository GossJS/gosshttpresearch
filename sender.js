#!/usr/local/bin/node

const { request: r } = require('http');

const { table, log } = console;
const options = {
  hostname: 'localhost',
  port: 4321,
  method:  process.argv[2] || 'GET',
  path: '/kkk'
};
const body = process.argv[3] || '';
const rq = r(options, res => {
     res.on('data', d => log('>>>' + String(d)) || table(res.headers));

   })
.on('error', e => log(e))
.on('response', d => table(d.rawHeaders) || log(d.statusCode + ' ' + d.statusMessage));

rq.setHeader('Content-Length', body.length); // без этого не получится послать GET+body
rq.end(body);

// при посылке методами POST, PUT, PATCH
// body посылается без всяких проблем
// чтобы послать GET и непустое body нужно также послать Content-Length
//     php devserver на GET с body без Content-Length отвечает сбросом соединения
//     (ECONNRESET) – это будет on.error
//
//     а index.js ответит 400 Bad Request – это будет on.response

// ./sender.js DELETE hey – пример вызова из командной строки
