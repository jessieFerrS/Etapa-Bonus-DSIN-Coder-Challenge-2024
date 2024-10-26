const mongoose = require('mongoose');

const duckSchema = new mongoose.Schema({
    color: { type: String, enum: ['esverdeada', 'padrão'], required: true }, //Coloração -> esverdeada = xenofago
    beakSize: { type: String, enum: ['médio', 'pequeno'], required: true }, //Tamanho do bico -> pequeno = xenofago
    quackAccent: { type: String, enum: ['alienígena', 'padrão'], required: true }, //Grasnado -> alienígena = xenófago
    behaviors: { type: [String], enum: ['manipula eletrônicos', 'monitora humanos', 'comunicação diferente', 'não se alimenta', 'nadando', 'voando', 'se alimentando'], required: true },
    suspiciousBehavior: { type: Boolean , default: false },  
    location: { type: String, enum:['lagoa', 'lago', 'oceano', 'parque', 'quintal', 'parque tecnológico', 'área industrial','data center', 'campo aberto', 'túnel estreito'], required: true },  // Ambiente em que foi visto
    flockSize: { type: Number, required: true },  // Tamanho do grupo
    identifiedAsXenophage: { type: Boolean, default: false },  // Se é alienígena ou não - padrão = não é alienigena
    captureStrategy: { type: String },  // Melhor estratégia de captura
    suggestedWeapon: { type: String }   // Arma recomendada para captura
}, { timestamps: true });

module.exports = mongoose.model('Duck', duckSchema);
