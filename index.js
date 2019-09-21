const { createServer } = require('http'); 

const { table, log } = console; // для краткости
createServer((request, response) => {
    const { url, method, headers } = request;
    const utfHeader = {
	      'Content-Type': 'text/html; charset=utf-8'
    }; // для разных символов в ответе
    table(headers); log(method); 
    const init = 'Привет мир с URL = '; // начало ответа
    let finalResponse = ' GET '; // по умолчанию GET
    if (method !== 'GET') finalResponse = ' NOGET '; // если POST, PUT, DELETE etc
    let accumulator = ''; // накопитель
    request
    .on('data', chunk => accumulator += chunk) /* чанки накапливаются */
    .on('end', () => {
	     finalResponse += accumulator; // формирование ответа
	     response.writeHead(200, { ...utfHeader }); // стильное формирование заголовка
	     response.end(`${init}${url}${finalResponse}!`); // собственно ответ
	  });
})
.listen(4321, '127.0.0.1', () => log(process.pid));
