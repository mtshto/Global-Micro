// server.js
const http = require('http');
const app = require('../src/app');
const port = buscaPorta(process.env.PORT || '3000');
const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening); // Corrigindo o nome do evento

console.log(`Api executada na porta ${port}`);

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe' + port : 'Port' + port;

    switch (error.code) {
        case "EACCES":
            console.error(bind + ' required elevated privileges');
            process.exit(1);
            break;

        case "EADDRINUSE":
            console.error(bind + ' is already in use');
            process.exit(1);
            break;

        default:
            throw error;
    }
}

function onListening() {
    var addr = server.address();
    var bind =
        typeof addr === 'string' ? `pipe ${addr}` : `${addr.family}:${addr.port}`;
    console.log('Listening on ' + bind);
}

function buscaPorta(val) {
    const port = parseInt(val, 10);

    if (isNaN(port))
        return val;

    if (port > 0)
        return port;

    return false;
}
