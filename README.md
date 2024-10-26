# DSIN Coder Challenge 2024

## A Ameaça de Outro Mundo
Na parte Client a aplicação foi desenvolvida em HTML5, CSS3 e JavaScript Puro, já do lado do Servidor, foi desenvolvida uma API em NodeJS e o banco de dados MongoDB(Atlas), sendo o Axios a peça central que conecta a API ao frontend.

## Vídeo do projeto
[!link do video]()

## Capturas de telas
[!link das imagens]()

O desenvolvimento se baseou nas Missões propostas, e segue abaixo o checklist de todas as implementações: 

### 🛸 1ª Missão - Operação Inventário Estelar ✅
Foi implementado um formulário onde o usuário deverá cadastrar os dados da nave como: 

- [x] Tamanho: pequena, média, grande ou colossal;
- [x] Cor: vermelha, laranja, amarela, verde, azul, anil ou violeta;
- [x] Local de queda: África, Europa, Ámerica, Ásia, Oceania, Antártida, Oceano Pacífico, Oceano Índico, Oceano Atlântico e Ártico;
- [x] Armamentos: Lança mísseis, Raios laser, Canhão de plasma, Projéteis biológicos, Campo de contenção, Deseintegrador, Manipulador da realidade, Escudo anti-ataque e Detector de inimigos;
- [x] Tipo de combustível: Radiação Eletromagnética, Plasma Estelar, Antimatéria, Biocombustível Alien, Energia Nuclear, Neutrinos Reversos;
- [x] Número de tripulantes;
- [x] Estado dos tripulantes: Quantos sobreviveram e como estão?;
- [x] Grau de avaria: “perda total”, “muito destruída”, “parcialmente destruída”, “praticamente intacta” e “sem avarias”;
- [x] Potencial de prospecção tecnológica: Nulo, Baixo, Moderado, Avançado, Extremamente Avançado, Além da Compreensão Humana(Hein?!);
- [x] Grau de periculosidade: Inofensivo, Moderado, Alto, Extremo e Crítico;

Nessa tela, o usuário ao cadastrar uma nave receberá um aviso de que a nave foi regitrada com sucesso, podendo ele `cancelar` para permanecer na tela de cadastro para cadastrar mais uma nave, `Ir para a Página Inicial` que o levará para o comando central, onde terá mais informações sobre as naves e os Aliens, e os links para navegação e `Ir para a Central de Armazenamento` que é o ambiente de registro de todas as naves cadastradas e seus detalhes. Caso o usuário se esqueça de preencher algum campo será retornado uma tela de `🚨Alerta Vermelho🚨`, onde o usuário será obrigado a clicar em `ok` e preencher o campo para dar continuidade a navegação.

### 🛸 2ª Missão - Missão Etiqueta Galáctica✅
Foi desenvolvida uma tela, no qual são catalogadas as informações das naves, aqui é possível verificar a classificação das naves que são cadastradas, ou seja com base nos dados a nave é classificada de acordo com sua utilidade futura.

Sendo as classificações, as seguintes:

- [x]  Sucata Espacial: A nave tem pouco ou nenhum valor tecnológico, mas suas peças podem ser reutilizadas em outras construções ou projetos.
- [x]  Jóia Tecnológica: Possui sistemas e componentes avançados que podem ser estudados e adaptados para melhorar nossa própria tecnologia.
- [x]  Arsenal Alienígena: Contém armamentos ou defesas avançadas que podem ser úteis para reforçar nossa segurança;
- [x]  Ameaça em Potencial: Possui elementos que podem ser perigosos, como armadilhas, sistemas autônomos hostis ou biocontaminantes.
- [x]  Fonte de Energia Alternativa: Contém tecnologias de propulsão ou sistemas de energia únicos que poderiam ser aproveitados.
- [x]  Corre que vai dar ruim!: Contém tecnologias que vão além da compreensão humana, mas que ao manipulá-la gerou uma certa faísca?! e algumas reações inesperadas😱😨, mas que talvez quem sabe no futuro a gente aprenda bem e faça alguma tecnologia quântica?🫣😬😵‍💫Xyg zxg zygK'schk'sch, blorgΔΩΜΞ.Hã?!O que foi que eu disse mesmo?😵‍💫😵‍💫
- [x]  Classificação Indefinida: As vezes parece que é algo extraordinário e nunca visto, as vezes mais uma sucata e outros momentos uma fonte alternativa, mas afinal qual o seu potencial? Até agora nenhum sistema foi capaz de predizer🤔🤔.

>📌*Importante*: Os critérios utilizados na classificação estão documentados na API 👇🏾👇🏽.
>> Link da documentação da API NodeJS: []()

A página `Centro de Naves Capturadas` tem um `menu` que leva o usuário a percorrer toda a aplicação, nessa página o usuário pode `filtrar` por `classificação as naves`, ou seja, há um seletor que permite retornar um tipo específico de nave que se desejar verificar e quando não houver nenhum tipo cadastrado uma mensagem será emitida.

Além disso, o usuário poderá `editar` uma determinada nave, sendo assim, dependendo de como for a edição a classificação poderá mudar,e também poderá fazer a `deleção` de uma nave.

### 🛸 3ª Missão - Operação Visão de Captura ✅
Foi-se criado um sistema que por sua vez foi integrado a um óculos de visão noturna, para verificar e distinguir os nossos patos comuns dos xenófagos.

Para essa finalidade o usuário deverá inserir os dados que está observando como:
- [x]  Cor: Esverdeada(Xenófago) ou Padrão
- [x]  Tamanho do Bico: Pequeno(Xenófago) ou Médio
- [x]  Sotaque: Padrão ou Alienígena(Xenófago)
- [x]  Tamanho do Bando: É um display que vai imprimir o numero que o usuário apertar, sendo que caso ele erre ao clicar em `C` limpará o display e ele poderá digitar o número de indivíduos novamente
- [x]  Comportamento: Nadando, Voando, Se Alimentando, Não se Alimenta, Monitora Humanos, Manipula Eletrônicos, Comunicação Diferente.(São checkboxes, logo podem ser marcados mais de um).

Logo após inserir suas observações o usuário deverá clicar no botão `Enviar` para que o sistema possa processar as informações e retornar:
- A análise das características e identificar se se trata de um pato (Anas platyrhynchos) ou de um Xenófago;
- Se for um Xenófago, exibirá a melhor estratégia de captura, levando em conta o ambiente em que se encontra e o tamanho do bando alienígena;
- Sugerir a arma mais eficaz para a captura. 

Todas essas informações serão exibidas na lente direita do óculos.

Na Tela em que se encontra o `óculos` e o `controle de informações` há dois ícones, sendo um que retorna para o comando central(Tela Inicial) e outro que vai para o centro de armazenamento da nave.

>📌*Fica Ligado(🔈)*: Dá para clicar no ícone de `audio` nas telas para navegar ainda mais na aplicação e melhorar a imersão e ser um caçador de Patoliens😬😱🤣, Xenófagos(Patos Galáticos).

### 🎡 Como rodar essa aplicação 
Como essa aplicação foi desenvolida, com HTML5, CSS3 e JavaScript e não foi utilizado nenhum framework no frontend, basta `clonar` esse diretório/ficheiro e buscar o arquivo `index.html` e dar um double click sobre esse arquivo. Porém será necessário algums comandos para rodar o lado do servidor na sua máquina e para isso você vai precisar ter instalado o NodeJS(aqui foi utilizada a versão 20.9.0), segue os comandos:
- Para rodar a API em ambiente de desenvolvimento, no prompt de comando digite:
```
cd api_missao_alienigena
```
Uma vez dentro do diretório, digite o comando:
```
node server.js
```
- Após isso a API estará disponível em `http://localhost:3000/api-docs`

>📌*Fica a Dica*: Não esquece de consultar a documentação da API lá em cima caso tenha alguma dúvida e de se conectar no MongoDB Atlas.

### 📝 O que nós aprendemos com essa participação no Coder Challenge
Foi a competição mais legal que esse time já participou, com esse desafio aprendemos🥳🎉:
- Habilidades Técnicas, reforçando os conhecimentos em HTML5, CSS3, JavaScript, NodeJS e MongoDB.
- Gerenciamento de tempo, pois foi necessário estipular o tempo para desenvolvimento da API, do Frontend e é claro da documentação, pois essa nunca pode faltar.
- Ser mais criativo.
- Trabalhar em equipe, por menor que ela seja, ouvir o que o parceiro tem a dizer, expor suas ideias e estar apto a receber ideias e também feedback🫱🏾‍🫲🏽🤜🏽🤛🏾.
- Falhar, recomeçar, falhar novamente, aprender com as falhas, acertar, ver aonde falhou, pois na área de tecnologia há muitas falhas, mas também há muitas conquistas com todas essas falhas.
- Amar o que está fazendo.
- Buscar o MVP(Minimum Viable Project) e depois aprimorar o que foi feito buscando sempre aperfeiçoar e entregar o melhor.

### Integrantes do desenvolvimento desse projeto
Aqui estão os github dos colaboradores desse projeto:
- [Caroline Ferreira](https://github.com/CarolFerr)
- [Jéssica Ferreira](https://github.com/jessieFerrS)

## 🔓 Contribua
Embora esse projeto tenha sido para uma competição ele está aberto caso deseje implementar alguma funcionalidade nova ou até menos modificar alguma já existente. Mas te pedimos que contribua com uma ⭐, ficaremos muito feliz 😁😁.
Contribuições são muito bem-vindas! Assim como dicas e sugestões. Siga os passos para contribuir:
1. Faça um fork do projeto.
2. Crie uma nova branch (git checkout -b feature/nova-funcionalidade).
3. Commit suas mudanças (git commit -am 'Adiciona nova funcionalidade').
4. Faça um push para a branch (git push origin feature/nova-funcionalidade).
5. Abra um Pull Request.

## 📜License
This project is under the MIT license.