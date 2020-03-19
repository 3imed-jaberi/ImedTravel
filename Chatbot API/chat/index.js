require('dotenv').config();

const http = require('http');
const app = require('./src');

const server = http.createServer(app);

const PORT = process.env.PORT;

server.listen(PORT , () => console.log(`server is runnig on port ${PORT} ...`));