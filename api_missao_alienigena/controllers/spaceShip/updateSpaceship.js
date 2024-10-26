const SpaceShip = require('../../models/SpaceShip');

async function updateSpaceship(req, res) {
  try{

    const spaceshipId = req.params._id;

    // VERIFICA SE O ID FOI FORNECIDO
    if (!spaceshipId) {
      return res.status(400).json({
        message: 'ID da nave é obrigatório',
        success: false,
        error: true
      });
    }

    // ENCONTRA E ATUALIZA A NAVE COM OS DADOS DO CORPO DA REQUISIÇÃO
    const updatespaceship = await SpaceShip.findByIdAndUpdate(spaceshipId, req.body, { new: true });


    // VERIFICA SE A NAVE FOI ENCONTRADA E ATUALIZADA
    if (!updatespaceship) {
      return res.status(404).json({
        message: 'Nave não encontrada',
        success: false,
        error: true
      });
    }

    res.status(200).json({
      message: 'Informações da Nave atualizadas com sucesso',
      data: updatespaceship,
      success: true,
      error: false
    });

  } catch(error){
    res.status(500).json({
      message: error.message || 'Erro ao atualizar a nave',
      error: true,
      success: false
    });
  }
}

module.exports = updateSpaceship;
