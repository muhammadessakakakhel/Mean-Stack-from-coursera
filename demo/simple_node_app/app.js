const http = require ('http');
const fs = require('fs');
const dir = './public/';
const port = process.env.PORT | 3000;

const server = http.createServer( ( req, res) =>{

    if(req.url === '/') {
        render(res, 'index.html');
    }else if (req.url === '/about'){
        render(res, 'about.html');
    }else if (req.url === 'contact'){
        render(res, 'contact.html');
    }else{
        res.writeHead(404, {'content-type':'text/html'});
        res.end('<h1>file not found</h1>');
    }

}).listen(3000, ()=>console.log("http://localhost:3000"));


const render = (res, file) =>{

fs.readFile(dir+file, (err, data) =>{
    if(err){
        res.writeHead(404, {'content-type':'text/html'});
        res.end('<h1>file not found</h1>');
    }
    res.writeHead(200,{'content-type': 'text/html'});
    return res.end(data);
});

}