/* const http = require("http");
const router = require("./router");

http.createServer((req, res) => {
    res.writeHead(200, { contentType: "text/plain" });
    router.rutas(req, res);
}).listen(3030, "localhost", () => {
    console.log("servercorriendo correctamente en el puerto 3030");
});
*/
const fs = require("fs");

let faqs = JSON.parse(fs.readFileSync(__dirname + "/data/faqs.json"), "utf-8");

for (const key in faqs.faqs) {
    console.log(faqs.faqs[key].faq_title);
    console.log(faqs.faqs[key].faq_answer);
}
