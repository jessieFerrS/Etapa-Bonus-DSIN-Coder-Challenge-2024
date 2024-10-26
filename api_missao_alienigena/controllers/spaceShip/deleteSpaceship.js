const SpaceShip = require('../../models/SpaceShip');

const deleteSpaceship = async(req, res) => {
  try{

    const { spaceshipId } = req.params;

    const deletedSpaceship = await SpaceShip.findByIdAndDelete(spaceshipId);

    if(!deletedSpaceship){
      return res.status(404).json({
        message: 'Nave alienígena não encontrada!',
        success: false,
        error: true
      });
    }

    res.status(200).json({
      message: 'Nave alienígena deletada com sucesso.',
      error: false,
      success: true,
      data: deletedSpaceship
    });

  } catch(error){
    res.status(500).json({
      message: error.message || 'Erro ao deletar a Nave.',
      error: true,
      success: false
    });
  }
}

module.exports = deleteSpaceship;
