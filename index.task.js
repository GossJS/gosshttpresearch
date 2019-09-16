const { Server } = require('http');
const s = new Server();
s.on('request', (req, res) => {
    const { url } = req;
	const hu = {
	      'Content-Type': 'text/html; charset=utf-8'
	};
    res.writeHead(200, { ...hu });
    if (req.method === 'POST') {
       console.log('POST');
       let b = '';
       req.on('data', d => b += d);
       req.on('end', () => console.log(b));
    }   
	res.end(`Привет мир с URL = ${url}!`);
});
s.on('connection', () => console.log(process.pid));
s.listen(4321, '127.0.0.1');