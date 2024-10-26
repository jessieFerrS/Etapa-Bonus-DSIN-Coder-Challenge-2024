const DuckObservation = require('../../models/DuckObservation');

// FUNÇÃO PARA RETORNAR TODOS OS PATOS CLASSIFICADOS COMO XENOFAGOS
async function getAllXenophages(req, res) {
  try{
    // BUSCA TODOS OS PATOS IDENTIFICADOS COMO XENÓFAGOS
    const xenophages = await DuckObservation.find({ identifiedAsXenophage: true });

    // VERIFICA SE EXISTEM PATOS XENÓFAGOS
    if(xenophages.length === 0){
      return res.status(404).json({
        message: 'Nenhum pato Xenófago encontrado.',
        error: true,
        success: false,
        data: []
      });
    }

    // RETORNA A LISTA DE PATOS XENÓFAGOS
    res.status(200).json({
      message: 'Lista de patos Xenófagos encontrada.',
      error: false,
      success: true,
      data: xenophages
    });
  } catch(error){
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false
    });
  }
}

module.exports = getAllXenophages;
