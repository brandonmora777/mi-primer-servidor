const http = require('http');
const fs = require('fs');

function log(message) {
  const line = new Date().toISOString() + ' - ' + message + '\n';
  fs.appendFileSync('./logs/app.log', line);
  console.log(message);
}

const server = http.createServer((req, res) => {
  if (req.url === '/status') {
    log('Endpoint /status llamado');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('App funcionando correctamente');

  } else if (req.url === '/brandon') {
    log('Endpoint /brandon llamado');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hola Intraway');

  } else {
    log('Endpoint desconocido: ' + req.url);
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Ruta no encontrada');
  }
});
server.listen(3000, () => {
  log('Servidor iniciado en puerto 3000');
});
