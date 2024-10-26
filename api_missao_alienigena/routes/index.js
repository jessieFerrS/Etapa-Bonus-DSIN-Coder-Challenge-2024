const express = require('express');

const router = express.Router();

// CONSTANTES DE TODAS AS ROTAS
const getAllSpaceshipsController = require('../controllers/spaceShip/getAllSpaceships');
const getOneSpaceshipController = require('../controllers/spaceShip/getOneSpaceship');
const updateSpaceshipController = require('../controllers/spaceShip/updateSpaceship');
const registerNewShipController = require('../controllers/spaceShip/registerNewShip');
const getSpaceshipByClassificationController = require('../controllers/spaceShip/getSpaceshipByClassification');
const dismantleSpaceshipController = require('../controllers/spaceShip/dismantleSpaceship');
const deleteSpaceshipController = require('../controllers/spaceShip/deleteSpaceship');
const analyzeDuckObservationController = require('../controllers/duckObservation/analyzeDuckObservation');
const getAllDuckObservationController = require('../controllers/duckObservation/getAllDuckObservation');
const getOneDuckObservationController = require('../controllers/duckObservation/getOneDuckObservation');
const getAllXenophagesController = require('../controllers/duckObservation/getAllXenophages');
const deleteDuckObservationController = require('../controllers/duckObservation/deleteDuckObservation');
const updateDuckObservationController = require('../controllers/duckObservation/updateDuckObservation');


//// INVENTARIO DE NAVES ALIENÍGENAS ////
/**
 * @swagger
 * /registernewship:
 *   post:
 *     summary: Cadastra uma nova nave
 *     tags: [Spaceships]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Spaceship'
 *     responses:
 *       201:
 *         description: Nave cadastrada com sucesso!
 *       400:
 *         description: Erro! Não foi possível cadastrar a nave.
 */

// REGISTRAR UMA NOVA NAVE
router.post('/registernewship', registerNewShipController);

/**
 * @swagger
 * components:
 *   schemas:
 *     Spaceship:
 *       type: object
 *       required:
 *         - size
 *         - color
 *         - crashLocation
 *         - weaponry
 *         - fuelType
 *         - crew.number
 *         - crew.status
 *         - damageLevel
 *         - techProspect
 *         - dangerLevel
 *       properties:
 *         id:
 *           type: string
 *           description: ID auto-gerado da nave
 *         size:
 *           type: string
 *           description: O tamanho da nave (pequena, média, grande ou colossal)
 *         color:
 *           type: string
 *           description: A cor da nave (vermelha, laranja, amarela, verde, azul, anil ou violeta)
 *         crashLocation:
 *           type: string
 *           description: Local de queda (continente ou oceano)
 *         weaponry:
 *           type: [string]
 *           description: Poderio bélico e tipo de armas da nave
 *         fuelType:
 *           type: string
 *           description: Tipo de combustível da nave
 *         crew.number:
 *           type: integer
 *           description: Número de tripulantes na nave
 *         crew.status:
 *           type: string
 *           description: Estado dos tripulantes (quantos sobreviveram e como estão)
 *         damageLevel:
 *           type: string
 *           description: Grau de avaria (perda total, muito destruída, parcialmente destruída, praticamente intacta, sem avarias)
 *         techProspect:
 *           type: string
 *           description: Potencial de prospecção tecnológica da nave
 *         dangerLevel:
 *           type: string
 *           description: Grau de periculosidade da nave
 *       example:
 *         id: "objectId"
 *         size: "string"
 *         color: "string"
 *         crashLocation: "string"
 *         weaponry: [string]
 *         fuelType: "string"
 *         crew.number: 0
 *         crew.status: "string"
 *         damageLevel: "string"
 *         techProspect: "string"
 *         dangerLevel: "string"
 */

/**
 * @swagger
 * tags:
 *   name: Spaceships
 *   description: Gerenciamento e Classificação de naves alienígenas (Operação Inventário Estelar)
 */

/**
 * @swagger
 * /getallspaceships:
 *   get:
 *     summary: Retorna todas as naves catalogadas
 *     tags: [Spaceships]
 *     responses:
 *       200:
 *         description: Lista de todas as naves
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Spaceship'
 * 
 *       400:
 *         description: Bad Request.
 *         content:
 *            apllication/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: Servidor não pode processar a requisição, devido a algum erro.
 *         
 */

// LISTAR TODAS AS NAVES
router.get('/getallspaceships', getAllSpaceshipsController);

/**
 * @swagger
 * /getonespaceship/{id}:
 *   get:
 *     summary: Retorna uma nave específica pelo ID
 *     tags: [Spaceships]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID da nave
 *     responses:
 *       200:
 *         description: Dados da nave
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Spaceship'
 *       404:
 *         description: Nave não encontrada
 */

// RETORNA A NAVE PELO ID
router.get('/getonespaceship/:spaceshipId', getOneSpaceshipController)


/**
 * @swagger
 * /spaceshipbyclassification/classification/{classification}:
 *   get:
 *     summary: Retorna as naves pela classificação
 *     tags: [Spaceships]
 *     parameters:
 *       - in: path
 *         name: classification
 *         schema:
 *           type: string
 *         required: true
 *         description: A classificação da nave
 *     responses:
 *       200:
 *         description: Dados da nave
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Spaceship'
 *       404:
 *         description: Nave não encontrada
 */
// RETORNA AS NAVES DE ACORDO COM A CLASSIFICAÇÃO
router.get('/spaceshipbyclassification/classification/:classification', getSpaceshipByClassificationController);


/**
 * @swagger
 * /updatespaceship/{id}:
 *   put:
 *     summary: Atualiza uma nave existente a partir do seu ID
 *     tags: [Spaceships]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID da nave
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Spaceship'
 *     responses:
 *       200:
 *         description: Nave atualizada com sucesso
 *       404:
 *         description: Nave não encontrada
 */
// ATUALIZA A NAVE
router.put('/updatespaceship/:_id', updateSpaceshipController);


/**
 * @swagger
 * /dismantlespaceship/{id}:
 *   delete:
 *     summary: Remove uma nave classificada como Sucata Espacial do catálogo de naves
 *     tags: [Spaceships]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID Sucata Espacial para ser desmontada
 *     responses:
 *       200:
 *         description: Sucata Espacial desmontada com sucesso
 *       404:
 *         description: Nave não encontrada
 * 
 */
// DELETA (DESMONTA) UMA NAVE CLASSIFICADA COMO SUCATA
router.delete('/dismantlespaceship/:spaceship', dismantleSpaceshipController);

/**
 * @swagger
 * /deletespaceship/{id}:
 *   delete:
 *     summary: Remove uma nave do catálogo de naves.
 *     tags: [Spaceships]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID da Nave
 *     responses:
 *       200:
 *         description: Nave deletada com sucesso
 *       404:
 *         description: Nave não encontrada
 * 
 */
// ROTA PARA DELETAR UMA NAVE DO CATALOGO DE NAVES
router.delete('/deletespaceship/:spaceshipId', deleteSpaceshipController);


////  OBSERVAÇÃO DE PATOS  ////

/**
 * @swagger
 * components:
 *   schemas:
 *     DuckObservation:
 *       type: object
 *       properties:
 *         color:
 *           type: string
 *           description: Cor do pato (esverdeada ou normal)
 *         beakSize:
 *           type: string
 *           description: Tamanho do bico (menor ou normal)
 *         quackAccent:
 *           type: string
 *           description: Sotaque do grasnado (alienígena ou normal)
 *         behaviors:
 *           type: [string]
 *           description: Comportamento avistado
 *         suspiciousBehavior:
 *           type: boolean
 *           description: Comportamento suspeito
 *         location:
 *           type: string
 *           description: Localização do avistamento
 *         flockSize:
 *           type: integer
 *           description: Tamanho do bando de patos
 *         identifiedAsXenophage:
 *           type: boolean
 *           description: Se o pato foi identificado como alienígena (Xenófago)
 *         captureStrategy:
 *           type: string
 *           description: Melhor estratégia de captura
 *         suggestedWeapon:
 *           type: string
 *           description: Arma sugerida para captura
 *       example:
 *         color: "string"
 *         beakSize: "string"
 *         quackAccent: "string"
 *         behaviors: [string]
 *         location: "string"
 *         flockSize: 0
 *          
 *          
 */

/**
 * @swagger
 * /analyzeduckobservation:
 *   post:
 *     summary: Registra uma nova observação de patos
 *     tags: [DuckObservation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DuckObservation'
 *     responses:
 *       201:
 *         description: Observação de pato criada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DuckObservation'
 *       500:
 *         description: Erro no servidor
 */
/**
 * @swagger
 * tags:
 *   name: DuckObservation
 *   description: Sistema de Observação de Patos Alienígenas (Operação Visão de Captura)
 */
// CRIA UMA OBSERVAÇÃO DE PATOS
router.post('/analyzeduckobservation', analyzeDuckObservationController);


/**
 * @swagger
 * /getallduckobservation:
 *   get:
 *     summary: Retorna todas as observações de patos
 *     tags: [DuckObservation]
 *     responses:
 *       200:
 *         description: Lista de todas as observações de patos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DuckObservation'
 *       500:
 *         description: Erro no servidor
 */

// ROTA PARA LISTAR TODAS AS OBSERVAÇÕES DE PATOS
router.get('/getallduckobservation', getAllDuckObservationController);

/**
 * @swagger
 * /getoneduckobservation/{id}:
 *   get:
 *     summary: Retorna uma observação de patos pelo ID
 *     tags: [DuckObservation]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID da observação de pato
 *     responses:
 *       200:
 *         description: Dados da observação
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DuckObservation'
 *       404:
 *         description: Observação de patos não encontrada
 */

// ROTA PARA LISTA UMA OBSERVAÇÃO DE PATOS PELO SEU ID
router.get('/getoneduckobservation/:duckObservationId', getOneDuckObservationController);

/**
 * @swagger
 * /getallxenophages:
 *   get:
 *     summary: Retorna todas as observações de patos onde o pato é um xenófago
 *     tags: [DuckObservation]
 *     responses:
 *       200:
 *         description: Lista de todos os patos xenófagos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DuckObservation'
 *       500:
 *         description: Erro no servidor
 */
// ROTA PARA LISTAR TODAS AS OBSERVAÇÕES ONDE O PATO É UM XENOFAGO
router.get('/getallxenophages', getAllXenophagesController);

/**
 * @swagger
 * /updateduckobservation/{id}:
 *   put:
 *     summary: Atualiza uma observação de patos a partir do seu ID
 *     tags: [DuckObservation]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID da Observação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DuckObservation'
 *     responses:
 *       200:
 *         description: Observação de patos atualizada com sucesso.
 *       404:
 *         description: Observação de Patos não encontrada.
 */
// ATUALIZA UMA OBSERVAÇÃO DE PATOS
router.put('/updateduckobservation/:_id', updateDuckObservationController);

/**
 * @swagger
 * /deleteduckobservation/{id}:
 *   delete:
 *     summary: Remove uma observação de patos do cadastro
 *     tags: [DuckObservation]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID da Observação
 *     responses:
 *       200:
 *         description: Observação deletada com sucesso
 *       404:
 *         description: Observação não encontrada
 * 
 */
// ROTA PARA DELETAR UMA OBSERVAÇÃO DE PATOS
router.delete('/deleteduckobservation/:duckId', deleteDuckObservationController);


module.exports = router;
