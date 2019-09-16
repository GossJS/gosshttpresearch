require('http')
.Server((req, res) => {
	const hu = {
	      'Content-Type': 'text/html; charset=utf-8'
	};
    res.writeHead(200, { ...hu });
	res.end('Привет мир!');
})
.listen(4321, () => console.log(process.pid));