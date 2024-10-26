const DuckObservation = require('../../models/DuckObservation');

const getOneDuckObservation = async(req, res) => {
  try{
    const { duckObservationId } = req.params;

    const duckObservation = await DuckObservation.findById(duckObservationId);

    if(!duckObservation){
      return res.status(404).json({
        data: null,
        message: 'Observação de Patos não encontrada.',
        success: false,
        error: true
      });
    }

    res.status(200).json({
      data: duckObservation,
      message: 'Observação retornada com sucesso.',
      success: true,
      error: false
    });
  } catch(error){
    res.json({
      message: error?.message || error,
      error: true,
      success: false
    });
  }
}

module.exports = getOneDuckObservation;
