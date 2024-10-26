# 🦆👽🛸API Construída em Node.js para o Desafio da Etapa Bônus do DSIN - CODER CHALLENGE🛸🦆👽

## 📋Descrição 

API RESTful em Node.js com o objetivo de cumprir o desafio da etapa bônus do Coder Challenge DSIN 2024, cujo o objetivo é fazer um levantamento de todas as naves "patolígenas" que caíram na terra, registrando suas características, nível de dano e grau de periculosidade, além de cataloga-las em categorias que possam indicar sua utilidade futura.
Além disso, essa API também se propõem a difícil missão de cumprir com a operação visão de captura, e para isso ela também monitora os movimentos e comportamentos dos patos (Anas platyrhynchos) com o objetivo de identificar padrões suspeitos entre a espécie - já que os Xenófagos(Patos alienígenas) se infiltraram entre os patos terrestres - e capturar por meio da melhor estratégia e com o uso das melhores armas os patos alienígenas antes que causem estragos na Terra.

## Requisitos
Antes de começar, certifique-se de ter instalado em seu sistema:
- VSCODE ou editor de código de sua preferência. 
- Node.js versão 16 ou superior (para essa API foi usada a versão 20.9.0).
- Cadastro MongoDB Atlas ou o MongoDB instalado na máquina.

## Instalação
1. Clone este repositório:

```
git clone https://github.com/jessieFerrS/Etapa-Bonus-DSIN-Coder-Challenge-2024.git
```

2. Acesse o diretório do projeto:

```
cd api_missao_alienigena
```
3. Crie uma arquivo dotenv(.env)

📌 Caso você não tenha o dotenv instalado em sua máquina, no command prompt digite o comando `npm install dotenv`. E crie o arquivo dotenv.
Nesse arquivo deve conter as seguintes variáveis:

```
PORT=3000
MONGO_URI=SUA_STRING_DE_CONEXÃO_MONGO*
```
* **Lembre-se:** Você deve ter uma conta no MongoDB Atlas e nele você deve ir até o cluster e clicar em connect, onde aparecerá a seguinte tela:
  
![Imagem do mongodb para obter a string de conexão](https://github.com/jessieFerrS/Etapa-Bonus-DSIN-Coder-Challenge-2024/blob/main/imagens/tela%20mongodb%20atlas.png)
![Imagem do mongodb para obter onde encontrar sua string de conexão](https://github.com/jessieFerrS/Etapa-Bonus-DSIN-Coder-Challenge-2024/blob/main/imagens/onde%20encontrar%20string%20conexao%20do%20mongodb.png)

Copie sua string de conexão e coloque o seu db_username e a sua db_password previamente cadastradas. Cole na variável MONGO_URI, já dita acima. 

4. Agora é só rodar o seguinte comando no command prompt do VSCODE ou no editor de sua preferência, lembrando que toda a criação do projeto e seus testes foram desenvolvidos no VSCODE.
```
node server.js
```
Mas Olha👀: Caso enfrente alguma dificuldade talvez seja porque é necessário você instalar algumas dependências:

```
npm install express mongoose swagger-jsdoc swagger-ui-express
```

## Configuração
Instale as dependências caso seja necessário.
```
npm install express mongoose swagger-jsdoc swagger-ui-express dotenv
```

Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias. Lembre-se de colocar aqui sua string de conexão do MongoDb. Um exemplo de `.env`:
```
PORT=3000
MONGO_URI=SUA_STRING_DE_CONEXÃO_MONGO
```

## Uso 
Para rodar a API em ambiente de desenvolvimento, utilize o seguinte comando:
```
node server.js
```

A API estará disponível em `http://localhost:3000/api-docs`

## Endpoints

### 🛸🛸 Catálogo de Naves alienígenas (Operação Inventário Estelar e Missão Etiqueta Galáctica) 🛸🛸

#### - POST /registernewship
Cadastra uma nova nave alienígena no catálogo.

#### Resposta:
```
{
  "message": "Nave registrada e classificada com sucesso!",
  "error": false,
  "success": true,
  "data": {
    "size": "grande",
    "color": "anil",
    "crashLocation": "ásia",
    "weaponry": [
      "desintegrador",
      "raios laser"
    ],
    "fuelType": "energia nuclear",
    "crew": {
      "number": 3,
      "status": "3 sobreviventes"
    },
    "damageLevel": "sem avarias",
    "techProspect": "moderado",
    "dangerLevel": "moderado",
    "_id": "671c66f4b77f6c7c8f6e32e6",
    "classification": "Arsenal Alienígena",
    "createdAt": "2024-10-26T03:50:12.976Z",
    "updatedAt": "2024-10-26T03:50:12.976Z",
    "__v": 0
  }
}
```

#### - GET /getallspaceships
Retorna uma lista com todas as naves catalogadas.
#### Resposta:
```
{
  "message": "Relação de Naves Cadastradas",
  "success": true,
  "error": false,
  "data": [
    {
      "crew": {
        "number": 6,
        "status": "2 mortos, 4 sobreviventes"
      },
      "_id": "6719b49ebb40ddc703cc5dab",
      "size": "média",
      "color": "azul",
      "crashLocation": "europa",
      "weaponry": [
        "projéteis biológicos",
        "escudo anti-ataque",
        "manipulador da realidade"
      ],
      "fuelType": "radiação eletromagnética",
      "damageLevel": "parcialmente destruída",
      "techProspect": "moderado",
      "dangerLevel": "moderado",
      "classification": "Arsenal Alienígena",
      "createdAt": "2024-10-24T02:44:46.131Z",
      "updatedAt": "2024-10-24T02:44:46.131Z",
      "__v": 0
    },
    {
      "crew": {
        "number": 4,
        "status": "2 mortos, 2 sobreviventes"
      },
      "_id": "6719b313bb40ddc703cc5da9",
      "size": "pequena",
      "color": "violeta",
      "crashLocation": "oceano pacífico",
      "weaponry": [
        "raios laser",
        "escudo anti-ataque"
      ],
      "fuelType": "biocombustível alienígena",
      "damageLevel": "muito destruída",
      "techProspect": "baixo",
      "dangerLevel": "inofensivo",
      "classification": "Sucata Espacial",
      "createdAt": "2024-10-24T02:38:11.870Z",
      "updatedAt": "2024-10-24T02:38:11.870Z",
      "__v": 0
    }
  ]
}
```

#### - GET /getonespaceship/:id
Retorna uma nave específica pelo seu ID.
#### Resposta:
```
{
  "data": {
    "crew": {
      "number": 6,
      "status": "2 mortos, 4 sobreviventes"
    },
    "_id": "6719b49ebb40ddc703cc5dab",
    "size": "média",
    "color": "azul",
    "crashLocation": "europa",
    "weaponry": [
      "projéteis biológicos",
      "escudo anti-ataque",
      "manipulador da realidade"
    ],
    "fuelType": "radiação eletromagnética",
    "damageLevel": "parcialmente destruída",
    "techProspect": "moderado",
    "dangerLevel": "moderado",
    "classification": "Arsenal Alienígena",
    "createdAt": "2024-10-24T02:44:46.131Z",
    "updatedAt": "2024-10-24T02:44:46.131Z",
    "__v": 0
  },
  "message": "Nave retornada com sucesso.",
  "success": true,
  "error": false
}
```

#### - GET / spaceshipbyclassification/classification/:classification
Retorna as naves de acordo com as sua classificação. As naves podem ser classificadas em:

- **Sucata espacial:** A nave tem um nível de prospecção tecnológica baixo ou nulo e o nível de perigo é inofensivo, mas sua peças podem ser reutilizadas para outros fins. 
- **Arsenal Alienígena:** A nave tem um nível de prospecção tecnológica moderado ou avançado e possui mais de um armamento.
- **Joia Tecnológica:** A nave tem um nível de prospecção tecnológica extremamente avançado ou além da compreensão(hein?).😲😟🤯
- **Ameaça em Potencial:** A nave tem um nível de prospecção tecnológica avançado, nível de perigo alto, extremo ou crítico e mais de um armamento.😬😱🫨
- **Fonte de Energia Alternativa:** A nave possui um nível de dano parcialmente destruída, praticamente intacta ou sem avarias e combustível do tipo energia nuclear ou neutrinos reversos ou plasma estelar.
- **Corre que vai dar muito ruim!:** A nave tem um nível de prospecção extremamente avançado ou além da compreensão (hein?), nível de perigo alto, extremo ou crítico e mais de 5 armas.🤯💨💨😱
- **Classificação Indefinida:** A nave não se encaixa em nenhuma das classificações anteriores.

#### Resposta:
```
{
  "data": [
    {
      "crew": {
        "number": 6,
        "status": "2 mortos, 4 sobreviventes"
      },
      "_id": "6719b49ebb40ddc703cc5dab",
      "size": "média",
      "color": "azul",
      "crashLocation": "europa",
      "weaponry": [
        "projéteis biológicos",
        "escudo anti-ataque",
        "manipulador da realidade"
      ],
      "fuelType": "radiação eletromagnética",
      "damageLevel": "parcialmente destruída",
      "techProspect": "moderado",
      "dangerLevel": "moderado",
      "classification": "Arsenal Alienígena",
      "createdAt": "2024-10-24T02:44:46.131Z",
      "updatedAt": "2024-10-24T02:44:46.131Z",
      "__v": 0
    }
  ],
  "message": "Naves com a classificação: Arsenal Alienígena encontradas com sucesso!",
  "success": true,
  "error": false
}
```

#### - PUT /updatespaceship/:id
Atualiza uma nave existente a partir do seu ID.

#### Resposta:
```
{
  "message": "Informações da Nave atualizadas com sucesso",
  "data": {
    "crew": {
      "number": 6,
      "status": "3 vivos, 3 mortos"
    },
    "_id": "671ba26f0ac76310af6dd8a0",
    "size": "grande",
    "color": "azul",
    "crashLocation": "oceano ártico",
    "weaponry": [
      "lança mísseis",
      "raios laser",
      "projéteis biológicos",
      "campo de contenção",
      "manipulador da realidade",
      "escudo anti-ataque"
    ],
    "fuelType": "neutrinos reversos",
    "damageLevel": "sem avarias",
    "techProspect": "além da compreensão (hein?!)",
    "dangerLevel": "crítico",
    "classification": "Fonte de Energia Alternativa",
    "createdAt": "2024-10-25T13:51:43.202Z",
    "updatedAt": "2024-10-26T00:57:08.797Z",
    "__v": 0
  },
  "success": true,
  "error": false
}
```

#### - DELETE /dismantlespaceship/:id
Remove uma nave classificada como Sucata Espacial do catálogo, uma vez que naves com essa classificação são desmontadas e suas peças utilizadas para outras finalidades.

#### Resposta:
```
{
  "message": "Nave alienígena deletada com sucesso.",
  "error": false,
  "success": true,
  "data": {
    "crew": {
      "number": 1,
      "status": "morto"
    },
    "_id": "671b9f600ac76310af6dd898",
    "size": "pequena",
    "color": "violeta",
    "crashLocation": "ásia",
    "weaponry": [
      "campo de contenção"
    ],
    "fuelType": "plasma estelar",
    "damageLevel": "muito destruída",
    "techProspect": "baixo",
    "dangerLevel": "inofensivo",
    "classification": "Sucata Espacial",
    "createdAt": "2024-10-25T13:38:40.989Z",
    "updatedAt": "2024-10-25T13:38:40.989Z",
    "__v": 0
  }
}
```
#### - DELETE /deletespaceship/:id
Remove uma nave do catálogo de naves registradas.

#### Resposta:
```
{
  "message": "Nave alienígena deletada com sucesso.",
  "error": false,
  "success": true,
  "data": {
    "crew": {
      "number": 1,
      "status": "morto"
    },
    "_id": "671b9f600ac76310af6dd898",
    "size": "pequena",
    "color": "violeta",
    "crashLocation": "ásia",
    "weaponry": [
      "campo de contenção"
    ],
    "fuelType": "plasma estelar",
    "damageLevel": "muito destruída",
    "techProspect": "baixo",
    "dangerLevel": "inofensivo",
    "classification": "Sucata Espacial",
    "createdAt": "2024-10-25T13:38:40.989Z",
    "updatedAt": "2024-10-25T13:38:40.989Z",
    "__v": 0
  }
}
```

### 🦆👽👀 Operação Visão de Captura 🦆👽👀

#### - POST /analyzeduckobservation
Registra uma nova observação de patos. 


#### Resposta:
```
{
  "message": "Observação de Patos registrada e analisada com sucesso.",
  "error": false,
  "success": true,
  "data": {
    "color": "esverdeada",
    "beakSize": "pequeno",
    "quackAccent": "alienígena",
    "behaviors": [
      "monitora humanos",
      "manipula eletrônicos"
    ],
    "suspiciousBehavior": true,
    "location": "túnel estreito",
    "flockSize": 1,
    "identifiedAsXenophage": true,
    "_id": "671c6760b77f6c7c8f6e32e8",
    "captureStrategy": "iniciar protocolo de captura remota",
    "suggestedWeapon": "drones de Captura",
    "createdAt": "2024-10-26T03:52:00.877Z",
    "updatedAt": "2024-10-26T03:52:00.877Z",
    "__v": 0
  }
}
```

#### - GET /getallduckobservation
Retorna todas as observações de patos.

#### Resposta:
```
{
  "message": "Relação de Todas as Observações de Patos",
  "success": true,
  "error": false,
  "data": [
    {
      "_id": "671c6760b77f6c7c8f6e32e8",
      "color": "esverdeada",
      "beakSize": "pequeno",
      "quackAccent": "alienígena",
      "behaviors": [
        "monitora humanos",
        "manipula eletrônicos"
      ],
      "suspiciousBehavior": true,
      "location": "túnel estreito",
      "flockSize": 1,
      "identifiedAsXenophage": true,
      "captureStrategy": "iniciar protocolo de captura remota",
      "suggestedWeapon": "drones de Captura",
      "createdAt": "2024-10-26T03:52:00.877Z",
      "updatedAt": "2024-10-26T03:52:00.877Z",
      "__v": 0
    },...
```

#### - GET /getoneduckobservation/:id
Retorna uma observação de patos pelo ID.

#### Resposta:
```
{
  "data": {
    "_id": "671c5107b77f6c7c8f6e2f5b",
    "color": "esverdeada",
    "beakSize": "médio",
    "quackAccent": "alienígena",
    "behaviors": [
      "nadando",
      "não se alimenta",
      "comunicação diferente"
    ],
    "suspiciousBehavior": true,
    "location": "parque tecnológico",
    "flockSize": 5,
    "identifiedAsXenophage": false,
    "captureStrategy": "nenhuma captura necessária. É um pato comum!",
    "suggestedWeapon": "nenhuma arma necessária.",
    "createdAt": "2024-10-26T02:16:39.761Z",
    "updatedAt": "2024-10-26T02:16:39.761Z",
    "__v": 0
  },
  "message": "Observação retornada com sucesso.",
  "success": true,
  "error": false
}
```

#### - GET /getallxenophages
Retorna todas as observações de patos onde o pato é um xenófago(pato galáctico).

#### Resposta:
```
{
  "message": "Lista de patos Xenófagos encontrada.",
  "error": false,
  "success": true,
  "data": [
    {
      "_id": "671bf5d92a9c135cb88f0944",
      "color": "esverdeada",
      "beakSize": "pequeno",
      "quackAccent": "padrão",
      "behaviors": [
        "nadando",
        "voando",
        "se alimentando",
        "manipula eletrônicos",
        "comunicação diferente"
      ],
      "suspiciousBehavior": true,
      "location": "lagoa",
      "flockSize": 2,
      "identifiedAsXenophage": true,
      "captureStrategy": "cercar discretamente a área e utilizar armamento para captura de grupos",
      "suggestedWeapon": "rede eletromagnética de contenção",
      "createdAt": "2024-10-25T19:47:38.012Z",
      "updatedAt": "2024-10-25T19:47:38.012Z",
      "__v": 0
    },...
```

#### - PUT /updateduckobservation/:id
Atualiza uma observação de patos a partir do seu ID

#### Resposta:
```
{
  "message": "Informações da Observação de patos atualizadas com sucesso.",
  "data": {
    "_id": "671bf5d92a9c135cb88f0944",
    "color": "string",
    "beakSize": "string",
    "quackAccent": "string",
    "behaviors": [
      "string"
    ],
    "suspiciousBehavior": true,
    "location": "string",
    "flockSize": 0,
    "identifiedAsXenophage": true,
    "captureStrategy": "cercar discretamente a área e utilizar armamento para captura de grupos",
    "suggestedWeapon": "rede eletromagnética de contenção",
    "createdAt": "2024-10-25T19:47:38.012Z",
    "updatedAt": "2024-10-26T03:54:48.475Z",
    "__v": 0
  },
  "success": true,
  "error": false
}
```
#### - DELETE /deleteduckobservation/:id
Remove uma observação de patos do cadastro.

#### Resposta:
```
{
  "message": "Observação de pato deletada com sucesso.",
  "error": false,
  "success": true,
  "data": {
    "_id": "671bf5d92a9c135cb88f0944",
    "color": "string",
    "beakSize": "string",
    "quackAccent": "string",
    "behaviors": [
      "string"
    ],
    "suspiciousBehavior": true,
    "location": "string",
    "flockSize": 0,
    "identifiedAsXenophage": true,
    "captureStrategy": "cercar discretamente a área e utilizar armamento para captura de grupos",
    "suggestedWeapon": "rede eletromagnética de contenção",
    "createdAt": "2024-10-25T19:47:38.012Z",
    "updatedAt": "2024-10-26T03:54:48.475Z",
    "__v": 0
  }
}
```

## Contribuições
Contribuições são muito bem-vindas! Assim como dicas e sugestões. Siga os passos para contribuir:
1. Faça um fork do projeto.
2. Crie uma nova branch (git checkout -b feature/nova-funcionalidade).
3. Commit suas mudanças (git commit -am 'Adiciona nova funcionalidade').
4. Faça um push para a branch (git push origin feature/nova-funcionalidade).
5. Abra um Pull Request.
6. Deixa uma estrela no projeto😁.

## Licença
Este projeto está licenciado sob a licença MIT.