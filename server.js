/*Se pide:

Crear un repositorio en GitHub que se llame myFirstNodeServer
Clonarlo localmente
Inicializar un proyecto Node
Instalar el paquete moment
Implementar un servidor web local por el puerto 8080 que sea capaz de:
Cuando le pidan algo a la raíz ( "/" ), devolver el texto HTML:

<h1>¡Ya sé Node!</h1>
Cuando le pidan algo a "/hw", devolver el texto HTML:

<p style="color: orange">Happy Halloween!</p>
Cuando le pidan algo a "/myjson", devolver el objeto:

{ "nombre": "Espagueti", "apellido": "Volador" }
Cuando le pidan algo a "/timenow", devolver la hora actual del servidor.*/

// import libraries
const moment = require('moment');
const http = require('http');

// Define constans
const host = "localhost"; //127.0.0.1
const port = 8080;



const server = http.createServer((request, response) => {
    console.log(request.url);
    // if (request.url==="/"){
    //     response.writeHead(200,{
    //         'Content-Type': 'text/html',

    //     });
    //     response.write('<h1>¡Ya sé Node!</h1>');
    //     response.end();

    // }

    switch (request.url) {
        case "/":
            response.writeHead(200, {
                'Content-Type': 'text/html',

            });
            response.write('<h1>¡Ya sé Node!</h1>');
            response.end();
            break;
        case "/hw":
            response.writeHead(200, {
                'Content-Type': 'text/html',

            });
            response.write('<p style="color: orange">Happy Halloween!</p>');
            response.end();
            break;
        case "/myjson":

            response.writeHead(200, {
                'Content-Type': 'application/json',

            });
            response.write('{ "nombre": "Espagueti", "apellido": "Volador" }');
            response.end();
            break;
        case "/timenow":
            let laHora=moment().format('LTS');
            // ES6  Template String
           
            response.writeHead(200, {
                'Content-Type': 'text/plain',

            });
            response.write(`Hola mundo, son las ${laHora}`);
            response.end();
            break;
    }
});

// Start server
//funcion flecha sin nada
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);

});