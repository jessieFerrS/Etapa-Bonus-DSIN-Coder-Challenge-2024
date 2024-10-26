const SpaceShip = require("../../models/SpaceShip");

// ALGORITMO DE CLASSIFICAÇÃO
function spaceshipClassifier(spaceship) {
    let classification = '';
  
    // LÓGICA DE CLASSIFICAÇÃO COM BASE NAS PROPRIEDADES DA NAVE
    if((spaceship.techProspect === 'nulo' || spaceship.techProspect === 'baixo') && spaceship.damageLevel !== 'sem avarias'){
        classification = 'Sucata Espacial';
    } else if(['moderado', 'avançado'].includes(spaceship.techProspect) && spaceship.weaponry.length > 1){
        classification = 'Arsenal Alienígena';
    } else if(spaceship.techProspect === 'avançado' && ['alto', 'extremo', 'crítico'].includes(spaceship.dangerLevel) && spaceship.weaponry.length > 1){
        classification = 'Ameaça em Potencial';
    } else if(['energia nuclear', 'neutrinos reversos', 'plasma estelar'].includes(spaceship.fuelType) && ['parcialmente destruída', 'praticamente intacta', 'sem avarias'].includes(spaceship.damageLevel)){
        classification = 'Fonte de Energia Alternativa';
    } else if(spaceship.techProspect === 'extremamente avançado' || spaceship.techProspect === 'além da compreensão (hein?!)'){
        classification = 'Jóia Tecnológica';
    } else if((spaceship.techProspect === 'extremamente avançado' || spaceship.techProspect === 'além da compreensão (hein?!)') && spaceship.weaponry.length > 5 && ['alto', 'extremo', 'crítico'].includes(spaceship.dangerLevel) && spaceship.damageLevel === 'sem avarias') {
        classification = 'Corre que vai dar ruim!';
    } else {
        classification = 'Classificação Indefinida';
    }
  
    return classification;
  }
  
// FUNÇÃO PARA CADASTRAR E CLASSIFICAR UM NOVA NAVE
async function registerNewShip(req, res) {
    try{
        // CRIA UMA NOVA NAVE COM OS DADOS DA REQUISIÇÃO
        const newShip = new SpaceShip(req.body);

        //CLASSIFICA A NAVE ANTES DE SALVAR
        newShip.classification = spaceshipClassifier(newShip);

        //SALVA A NAVE NO BANCO DE DADOS
        const saveShip = await newShip.save();

        res.status(201).json({
            message: 'Nave registrada e classificada com sucesso!',
            error: false,
            success: true,
            data: saveShip
        });
    } catch(error){
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}


module.exports = registerNewShip;

