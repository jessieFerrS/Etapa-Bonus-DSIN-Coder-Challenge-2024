const DuckObservation = require('../../models/DuckObservation');

const deleteDuckObservation = async(req, res) =>{
  try{

    const { duckId } = req.params;

    const deletedDuck = await DuckObservation.findByIdAndDelete(duckId);

    if(!deletedDuck){
      return res.status(404).json({
        message: 'Observação de pato não encontrada!',
        success: false,
        error: true
      });
    }

    res.status(200).json({
      message:'Observação de pato deletada com sucesso.',
      error: false,
      success: true,
      data: deletedDuck
    });
  } catch(error){
    res.status(500).json({
      message: error.message || 'Erro ao deletar a observação de pato.',
      error: true,
      success: false
    });
  }
}

module.exports = deleteDuckObservation;
