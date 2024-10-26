const Spaceship = require('../../models/SpaceShip');

const getOneSpaceship = async(req, res) => {
  try{
    const { spaceshipId } = req.params;

    const spaceship = await Spaceship.findById(spaceshipId);

    if(!spaceship){
      return res.status(404).json({
        data:null,
        message: 'Nave não encontrada.',
        success: false,
        error: true
      });
    }

    res.status(200).json({
      data: spaceship,
      message: 'Nave retornada com sucesso.',
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

module.exports = getOneSpaceship;
