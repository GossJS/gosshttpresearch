const { createServer: cS } = require('http');

const f = (req, res) => {
    const { url } = req;
	const hu = {
	      'Content-Type': 'text/html; charset=utf-8'
	};
    res.writeHead(200, { ...hu });
    console.log(req.headers);
    console.log(req.method);
    const init = 'Привет мир с URL = ';
    let pssst = ' GET ';
    if (req.method !== 'GET') pssst = ' NOGET ';
    let b = ''; 
    req.on('data', d => b += d);
	req.on('end', () => {
	     pssst += b;  
	     res.end(`${init}${url}${pssst}!`);   
	});    
};

cS(f).listen(4321, '127.0.0.1');