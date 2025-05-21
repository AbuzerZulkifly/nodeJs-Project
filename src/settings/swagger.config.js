const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Task Manager API',
      version: '1.0.0',
      description: 'API documentation for the Task Manager application',
      
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
      
      contact: {
        name: 'Abuzer Zulkifly',
        url: 'https://yourwebsite.com',
        email: 'zulkiflyabuzer@gmail.com'
        }
      },
      servers: [
        {
          url: 'http://localhost:3001',
          description: 'Development server',
        },
      ],
    },   
    apis: [
      path.join(__dirname, "..", "**/*.js")
    ]
  }
const specs = swaggerJsDoc(options);
module.exports = specs;