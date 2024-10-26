const DuckObservation = require('../../models/DuckObservation');

async function updateDuckObservation(req, res){
  try{
    
    const duckObservationId = req.params._id;

    // VERIFICA SE O ID FOI FORNECIDO
    if(!duckObservationId){
      return res.status(400).json({
        message: 'O ID da Observação é obrigatório',
        success: false,
        error: true
      });
    }

    // ENCONTRA E ATUALIZA A OBSERVAÇÃO DE PATOS COM OS DADOS DO CORPO DA REQUISIÇÃO
    const updateDuckObservation = await DuckObservation.findByIdAndUpdate(duckObservationId, req.body, { new: true });

    // VERIFICA SE A OBSERVAÇÃO FOI ENCONTRADA E ATUALIZADA
    if(!updateDuckObservation){
      return res.status(404).json({
        message: 'Observação de Patos não encontrada.',
        success: false,
        error: true
      });
    }

    res.status(200).json({
      message: 'Informações da Observação de patos atualizadas com sucesso.',
      data: updateDuckObservation,
      success: true,
      error: false
    });

  } catch(error){
    res.status(500).json({
      message: error.message || 'Erro ao atualizar a observação.',
      error: true,
      success: false
    });
  }
}

module.exports = updateDuckObservation;
