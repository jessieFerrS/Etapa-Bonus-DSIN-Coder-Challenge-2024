const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Configuração inicial do Swagger
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API de Monitoramento de Naves e Patos Galácticos',
        version: '1.0.0',
        description: 'Documentação da API para a Operação Inventário Estelar e Operação Visão de Captura.',
    },
    servers: [
        {
            url: 'http://localhost:3000/api',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'], // Caminho para os arquivos que contém as rotas da API
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};