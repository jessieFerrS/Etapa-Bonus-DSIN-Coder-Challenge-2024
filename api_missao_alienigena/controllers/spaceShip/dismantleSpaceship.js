const SpaceShip = require('../../models/SpaceShip');

const dismantleShip = async(req, res) => {
  try{
    // ENCONTRAR A NAVE PELO ID
    const spaceship = await SpaceShip.findById(req.params.id);

    if(!spaceship){
      return res.status(404).json({
        message: 'Nave não encontrada!',
        success: false,
        error: true
      });
    }

    // VERIFICA SE A NAVE PODE SER DESMANTELADA (SÓ SUCATAS ESPACIAIS PODEM SER DESMANTELADAS)
    if(spaceship.classification !== 'Sucata Espacial'){
      return res.status(400).json({
        message: 'A nave não pode ser demantelada, pois não é classificada como  Sucata Espacial',
        success: false,
        error: true
      });
    }

    // REMOVE A NAVE DO BANCO DE DADOS
    await spaceship.remove();

    return res.status(200).json({
      message: 'Nave desmantelada com sucesso e partes transferidas para para estoque, para depois serem reutilizadas. Ufa! uma nave a menos!',
      success: true,
      error: false
    });

  } catch(error){
    return res.status(500).json({
      message: 'Erro ao desmantelar a nave!',
      sucess: false,
      error: error.message
    });
  }
};

module.exports = dismantleShip;
