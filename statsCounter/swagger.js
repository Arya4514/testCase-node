const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'Description',
    },
    host: 'localhost:8001',
    schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server/routes/stats'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index.js')
});