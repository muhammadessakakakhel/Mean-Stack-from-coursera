const http = require('http');
const server = http.createServer( (request, response) => {

    response.writeHead(200,{'Content-type':'text/html'});
    if(request.url ==='/get'){
        response.write('you reached the get page')
         if (request.method === 'GET'){
             response.end('GET');
         }

    }else if(request.url ==='/post'){
        response.write('you reached the post page')

         if (request.method === 'POST'){
             response.end('POST');
         }
    }else if(request.url==='/put'){
        response.write('you reached the put page')

         if (request.method === 'PUT'){
             response.end('PUT');
         }
    }else if(request.url === '/delete'){
        response.write('you reached the delete page')
         if (request.method === 'DELETE'){
             response.end('DELETE');
         }
    }else {
        response.end('not found');
    }
    response.end();
   


}).listen(3000, ()=>console.log("http://localhost:3000"));

