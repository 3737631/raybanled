const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const MIME = {
  '.html':'text/html;charset=utf-8',
  '.js':'application/javascript',
  '.css':'text/css',
  '.webp':'image/webp',
  '.png':'image/png',
  '.jpg':'image/jpeg',
  '.svg':'image/svg+xml'
};

http.createServer((req,res)=>{
  let file = req.url === '/' ? '/index.html' : req.url;
  file = path.join(__dirname, file);
  const ext = path.extname(file);
  fs.readFile(file,(err,data)=>{
    if(err){
      res.writeHead(404);
      res.end('404');
    } else {
      res.writeHead(200,{'Content-Type':MIME[ext]||'text/plain'});
      res.end(data);
    }
  });
}).listen(PORT,()=>{
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
