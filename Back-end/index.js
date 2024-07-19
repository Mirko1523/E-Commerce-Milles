const PORT = 3001;
const server = require('./src/server')

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})