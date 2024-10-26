const SpaceShip = require('../../models/SpaceShip');

const getAllSpaceships = async(req, res) => {
  try{
    const allSpaceships = await SpaceShip.find().sort({ createdAt: -1 });

    res.status(201).json({
      message: 'Relação de Naves Cadastradas',
      success: true,
      error: false,
      data: allSpaceships
    });
  } catch(error){
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false
    });
  }
}

module.exports = getAllSpaceships;
