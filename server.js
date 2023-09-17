const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/stream') {
    // Configura las cabeceras para Server-Sent Events
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });

    // Envía datos en tiempo real al cliente cada segundo
    setInterval(() => {
      const data = `Dato en tiempo real: ${new Date()}\n`;
      res.write(`data: ${data}\n\n`);
    }, 1000);
  } else {
    // Sirve una página HTML simple para el cliente
    fs.readFile('index.html', 'utf8', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }
});

server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
