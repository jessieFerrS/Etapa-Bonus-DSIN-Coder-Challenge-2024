const Duck = require('../../models/DuckObservation');

// COMPORTAMENTOS SUSPEITOS
const SuspiciousBehavior = ['manipula eletrônicos', 'monitora humanos', 'comunicação diferente', 'não se alimenta']

// FUNÇÃO PARA DETECTAR COMPORTAMENTO SUSPEITO
function detectSuspiciousBehavior(duck){
    // VERIFICA SE ALGUM COMPORTAMENTO DO PATO ESTÁ NA LISTA DE COMPORTAMENTOS SUSPEITOS
    return duck.behaviors.some(behavior => SuspiciousBehavior.includes(behavior));
}

// FUNÇÃO PARA ANALISAR UM PATO
function duckAnalyzer(duck) {

    // VERIFICA SE O PATO TEM COMPORTAMENTO SUSPEITO
    duck.suspiciousBehavior = detectSuspiciousBehavior(duck);

    if (duck.color == 'esverdeada' &&  duck.beakSize === 'pequeno' && ['padrão', 'alienígena'].includes(duck.quackAccent) && duck.suspiciousBehavior === true) {

        duck.identifiedAsXenophage = true;

        // ESTRATÉGIA DE CAPTURA E ARMA SUGERIDA BASEADA NO LOCAL E NO TAMANHO DO BANDO
        if (['lagoa','lago'].includes(duck.location) && duck.flockSize > 1) {
            duck.captureStrategy = 'cercar discretamente a área e utilizar armamento para captura de grupos';
            duck.suggestedWeapon = 'rede eletromagnética de contenção';
        } else if(['lagoa','lago'].includes(duck.location) && duck.flockSize === 1) {
            duck.captureStrategy = 'cercar a área e equipar equipe com armamento para captura de um único pato.';
            duck.suggestedWeapon = 'esferas de contenção energéticas';
        } else if(duck.location === 'oceano' && duck.flockSize >= 1) {
            duck.captureStrategy = 'deixar a postos submarino e equipes de mergulho, desorientar os patos e capturar';
            duck.suggestedWeapon = 'canhão de pulso sônico';
        } else if(duck.location === 'campo aberto' && duck.flockSize >= 1){
            duck.captureStrategy = 'uso de camuflagem para se misturar ao ambiente e criar aproximação suficiente para proceder com a captura';
            if(duck.flockSize === 1){
                duck.suggestedWeapon = 'rifle de mira inteligente equipado com dardos tranquilizantes com gps';
            } else{
                duck.suggestedWeapon = 'rede eletromagnética de contenção';
            }
        } else if(['quintal', 'área industrial'].includes(duck.location) && duck.flockSize > 1){
            duck.captureStrategy = 'manter equipe a postos para captura com a arma adequada.';
            duck.suggestedWeapon = 'canhão de pulso sônico';
        } else if (['quintal', 'área industrial'].includes(duck.location) && duck.flockSize === 1){
            duck.captureStrategy = 'iniciar protocolo de captura corpo a corpo.';
            duck.suggestedWeapon = 'bastão de eletrochoque paralisante';
        } else if(duck.location === 'parque' && duck.flockSize >= 1){
            duck.captureStrategy = 'usar imagem holográfica de fêmea alienígena e aguardar até que os patos alienígenas se aproximem para proceder com a captura.';
            duck.suggestedWeapon = 'emissor de micro-ondas desorientadoras';
        } else if(['parque tecnológico', 'data center'].includes(duck.location) && duck.flockSize >= 1){
            duck.captureStrategy = 'utilizar neuroinibidores que desacelerem os movimentos e reflexos do pato alienígena permitindo sua captura';
            if(duck.flockSize === 1){
                duck.suggestedWeapon = 'arma de gel grudento';
            } else{
                duck.suggestedWeapon = 'pulverizador de longo alcance com tanque de neblina paralisante';
            }
        } else if(duck.location === 'túnel estreito' && duck.flockSize === 1){
            duck.captureStrategy = 'iniciar protocolo de captura remota';
            duck.suggestedWeapon = 'drones de Captura';
        } else if(duck.location === 'túnel estreito' && duck.flockSize > 1){
            duck.captureStrategy = 'atrair patos alienígenas para fora do local e proceder com a captura para Parque';
            duck.suggestedWeapon = 'combo = imagem holográfica de fêmea alienígena + emissor de micro-ondas desorientadoras';
        }
    } else {
        duck.identifiedAsXenophage = false;
        duck.captureStrategy = 'nenhuma captura necessária. É um pato comum!';
        duck.suggestedWeapon = 'nenhuma arma necessária.';
    }

    return duck;

}

// FUNÇÃO PARA CADASTRAR UMA NOVA OBSERVAÇÃO DE PATOS
async function registerNewDuck(req, res) {
    try{
        //CRIAÇÃO DE UM NOVO PATO COM OS DADOS DO CORPO DA REQUISIÇÃO
        const newDuck = new Duck(req.body);

        // ANALISE DO PATO
        const analyzedDuck = duckAnalyzer(newDuck);

        //SALVA O PATO ANALISADO NO BANCO DE DADOS
        const savedDuck = await analyzedDuck.save();

        res.status(201).json({
            message: 'Observação de Patos registrada e analisada com sucesso.',
            error: false,
            success: true,
            data: savedDuck
        });
    } catch (error){
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}

module.exports = registerNewDuck;

