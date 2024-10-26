const SpaceShip = require('../../models/SpaceShip');

// FUNÇÃO PARA OBTER TODAS AS NAVES POR UMA DETERMINADA CLASSIFICAÇÃO
const getSpaceshipByClassification = async(req, res) => {
  try {
    // PEGA A CLASSIFICAÇÃO DA REQUISIÇÃO
    const { classification } = req.params;

    // BUSCA TODAS AS NAVES COM ESSA CLASSIFICAÇÃO
    const spaceships = await SpaceShip.find({ classification });

    // SE NÃO ENCONTRAR NENHUMA NAVE
    if(spaceships.length === 0){
      return res.status(404).json({
        message: `Nenhuma nave encontrada com a classificação: ${classification}`,
        success: false,
        error: true,
      });
    }

    //RETORNA AS NAVES ENCONTRADAS
    res.status(200).json({
      data: spaceships,
      message: `Naves com a classificação: ${classification} encontradas com sucesso!`,
      success: true,
      error: false,
    });
  } catch(error) {
    res.status(500).json({
      message: 'Erro ao buscar as naves',
      success: false,
      error: true,
    });
  }
}

module.exports = getSpaceshipByClassification;
