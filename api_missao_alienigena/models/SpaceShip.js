const mongoose = require('mongoose');

const shipSchema = new mongoose.Schema({
    size: { type: String, enum: ['pequena', 'média', 'grande', 'colossal'], required: true },
    color: { type: String, enum: ['vermelha', 'laranja', 'amarela', 'verde', 'azul', 'anil', 'violeta'], required: true },
    crashLocation: { type: String, enum: ['áfrica', 'ásia', 'europa', 'américa', 'oceania', 'antártida', 'oceano pacífico', 'oceano atlântico', 'oceano índico', 'oceano antártico', 'oceano ártico'],required: true },  // Continente ou oceano
    weaponry: { type: [String], enum: ['lança mísseis', 'raios laser', 'canhão de plasma', 'projéteis biológicos', 'campo de contenção', 'desintegrador', 'manipulador da realidade', 'escudo anti-ataque', 'detector de inimigos'], required: true },  // Tipo de armamentos
    fuelType: { type: String, enum: ['radiação eletromagnética', 'plasma estelar', 'antimatéria', 'biocombustível alien', 'energia nuclear', 'neutrinos reversos'] ,required: true },  // Tipo de combustível
    crew: {
        number: { type: Number, required: true },  // Número de tripulantes
        status: { type: String, required: true }  // Estado dos tripulantes (Exemplo: 1 sobrevivente, 3 mortos)
    },
    damageLevel: {
        type: String,
        enum: ['perda total', 'muito destruída', 'parcialmente destruída', 'praticamente intacta', 'sem avarias'],
        required: true
    },
    techProspect: { type: String, enum: ['nulo', 'baixo', 'moderado', 'avançado', 'extremamente avançado', 'além da compreensão (hein?!)'], required: true },  // Potencial de prospecção tecnológica
    dangerLevel: { type: String, enum: ['inofensivo', 'moderado', 'alto', 'extremo', 'crítico'], required: true } , // Grau de periculosidade
    classification: { type: String }  //classificação será atribuida pelo algoritmo 
}, { timestamps: true });

module.exports = mongoose.models.Ship || mongoose.model('Ship', shipSchema);
