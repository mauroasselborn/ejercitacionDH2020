const http = require("http");
const router = require("./router");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "contentType": "text/plain" });
    res.end(router.rutas(req));
});

server.listen(3030, "localhost", () => {
    console.log("servercorriendo correctamente en el puerto 3030");
});
