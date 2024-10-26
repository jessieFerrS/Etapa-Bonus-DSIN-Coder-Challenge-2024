const Duck = require('../../models/DuckObservation');

const getAllDuckObservation = async(req, res) => {
  try{
    const allDuckObservation = await Duck.find().sort({ createdAt: -1 });

    res.status(201).json({
      message: 'Relação de Todas as Observações de Patos',
      success: true,
      error: false,
      data: allDuckObservation
    });
  } catch(error){
    res.status(400).json({
      message: error.message || error,
      error: true,
      success :false
    });
  }
}

module.exports = getAllDuckObservation;
