const { createServer: cS } = require('http');

const { table, log } = console;
cS((req, res) => {
    const { url, method, headers } = req;
    const hu = {
	      'Content-Type': 'text/html; charset=utf-8'
    };
    table(headers); log(method);
    const init = 'Привет мир с URL = ';
    let pssst = ' GET ';
    if (method !== 'GET') pssst = ' NOGET ';
    let b = '';
    req
    .on('data', d => b += d)
    .on('end', () => {
	     pssst += b;
       res.writeHead(200, { ...hu });
	     res.end(`${init}${url}${pssst}!`);
	  });
})
.listen(4321, '127.0.0.1', () => log(process.pid));
