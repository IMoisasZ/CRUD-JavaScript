// let nome = "moises barbosa dos santos";
// let idade = "38 anos";
// let listaDeCompras = ["açucar","café","macarrão"];

// //mostrar o tamanho da frase
// console.log(nome.length)

// //procurar alguma coisa no nome
// console.log(nome.indexOf("s"))

// //cortar a frase nos indices: inicio: indice 3 e termino: indice 6
// console.log(nome.slice(3,6))

// //remove espaços no final e no incio do texto
// console.log(nome.trim())

// //cria um array de acordo com os parametros indicados entre parenteses
// console.log(nome.split(" "))

// //substitui o primeiro paramentro pelo segundo.
// console.log(nome.replace("barbosa","aparecido"))

// //mostra o tipo da variavel
// console.log(typeof nome)

// //converter dados numero (apenas dados que sejam lançados como string mas são numeros)
// console.log(Number(idade))

// //converter dados numero (apenas dados que sejam lançados como string mas são numeros, 
// //porem, caso haja numero no incio da informação a mesma será convertida por numero)
// console.log(parseInt(idade));

// //converte para string
// console.log(String(listaDeCompras))


console.log("<---------------------------CADASTRAR CARROS-------------------------->")

console.log("<---------------------------Lista de carros--------------------------->")
let carros = [{
    id: "",
    marca: "Fiat",
    modelo: "Freemont"
},
{
    id: "",
    marca: "Fiat",
    modelo: "Doblo"
},
{
    id: "",
    marca: "Dodge",
    modelo: "Journey"
},
{
    id: "",
    marca: "Kia",
    modelo: "Sorento"
},
{
    id: "",
    marca: "Hyundai",
    modelo: "Gran Santa Fé"
},
{
    id: "",
    marca: "Chevrolet",
    modelo: "Zafira"
},
]

//Funcao para incluir carro
const incluirCarro = (carro) => {
    if(carro.id == ""){
        console.log("-----------------------------------------------")
        console.log("Não existe carro para incluir na lista!")
        console.log("-----------------------------------------------")
    }else{
        carros.push(carro);
        console.log("-----------------------------------------------")
        console.log("Carro incluido com sucesso!")
        console.log("-----------------------------------------------")
        console.log(cadastroCarro)
    }
    
}

//Variavel de inclusao
let cadastroCarro = {
    id: "",
    marca: "",
    modelo: ""
}

//Executar a função para incluir o novo carro
incluirCarro(cadastroCarro)

//Mostrar a lista de carros cadastrados
console.table(carros)

console.log("<------------------------------------------------------------------->")
console.log("<-------------------------Incluir ID carros------------------------->")
//Função para incluir ID nos carros
const incluirIdCarros = (listaCarros) =>{
        for(let i in listaCarros){
            listaCarros[i].id = Number(i) + 1;
        }
};

//Executr função para incluir ID
incluirIdCarros(carros)

//Mostrar a lista de carro cadastrados
console.table(carros)

console.log("<------------------------------------------------------------------->")
console.log("<------------------------Buscar Carro por Marca--------------------->")

//Função para procurar carro por marca
const procurarCarroPorMarca = (marcaCarro) => {
        const resultadoBuscaPorMarca = carros.filter(carro=> carro.marca == marcaCarro)
    switch (resultadoBuscaPorMarca.length) {
        case 0:
            console.log("-----------------------------------------------")
            return "Não existe a Marca procurada!"
            console.log("-----------------------------------------------")
            break;
        default:
            return resultadoBuscaPorMarca
            break;
        }        
}    
//Variavel para procurar o carro por marca
let marcaCarroProcurada = "Fiat"
console.table(procurarCarroPorMarca(marcaCarroProcurada))


console.log("<------------------------------------------------------------------->")
console.log("<------------------------Buscar Carro por Nome---------------------->")

//Função para procurar carro por nome
const procurarCarroPorNome = (nomeCarro) => {
    const resultadoBuscaPorNome = carros.filter(carro=> carro.modelo == nomeCarro)
    switch (resultadoBuscaPorNome.length) {
        case 0:
            console.log("-----------------------------------------------")
            return "Não existe o Modelo procurado!"
            console.log("-----------------------------------------------")
            break;
        default:
            return resultadoBuscaPorNome
            break;
        }  
}
//Variavel para procurar o carro por nome
let nomeCarroProcurado = "Freemont"
console.table(procurarCarroPorNome(nomeCarroProcurado))

console.log("<------------------------------------------------------------------->")
console.log("<-------------------------Buscar Carro por ID----------------------->")

const procurarCarroPorId = (idCarro) => {
    const resultadoBuscaPorId = carros.filter(carro=> carro.id == idCarro)
    switch (resultadoBuscaPorId.length) {
        case 0:
            console.log("-----------------------------------------------")
            return "Não existe o ID procurado!"
            console.log("-----------------------------------------------")
            break;
        default:
            return resultadoBuscaPorId
            break;
        }  
}
//Variavel para procurar o carro por nome
let idCarroProcurado = 2;
console.table(procurarCarroPorId(idCarroProcurado))

console.log("<------------------------------------------------------------------->")
console.log("<-------------------Alterar Informações do Veiculo------------------>")

//Variaveis para alteração do veiculo
let marc = "";
let marcAlteracao = "";
let resMarc = "";
let mod = "";
let modAlteracao = "";
let resMod = "";

//Pesquisar o vaiculo que sofrerá alteração
const altearDadosVeiculo = (nomeCarro, carrosCadastrados, alteracao) => {
    const dadosCarroAtual = carrosCadastrados.filter(carro=> carro.modelo == nomeCarro)
    
    //fazendo a alteração do veiculo selecionado acima
    switch (dadosCarroAtual.length) {
        case 0:
            console.log("-----------------------------------------------")
            return "O carro procurado não existe na lista!"
            console.log("-----------------------------------------------")
            break;
    
        default:
            console.log("-----------------------------------------------")
            console.log("Carro antes da alteração")
            console.log("-----------------------------------------------")
            
            console.table(dadosCarroAtual)

            console.log("-----------------------------------------------")
            console.log("Carro depois da alteração")
            console.log("-----------------------------------------------")
            for(let i in dadosCarroAtual){
                marc = String(dadosCarroAtual[i].marca);
                marcAlteracao = alteracao[i].marca;
                resMarc = marc.replace(marc, marcAlteracao);
                dadosCarroAtual[i].marca = resMarc;
                
                mod = String(dadosCarroAtual[i].marca);
                modAlteracao = alteracao[i].modelo;
                resMod = mod.replace(mod, modAlteracao);
                dadosCarroAtual[i].modelo = resMod;
                
            }
            return dadosCarroAtual
            break;
    } 
}

//variavel com os dados a serem alterados
let dadosParaAlterar = [{
    marca: "VW",
    modelo: "Tiguan"
}]

//variavel com o nome do veiculo que será pesquisado para fazer alteração
let carroParaAlterarDados = "Sorento"

//chamada da função para alterar dados do veiculo pesquisado

console.table(altearDadosVeiculo(carroParaAlterarDados, carros, dadosParaAlterar))
console.log("-----------------------------------------------")
console.log("Lista de carros completa após alteração!")
console.log("-----------------------------------------------")
console.table(carros)

console.log("<------------------------------------------------------------------->")
console.log("<----------------------Excluir veiculo por nome--------------------->")

const deletarCarroPorNome = (id, listaCarros) => {
    let procurarCarro = listaCarros.filter(procurarCarro => procurarCarro.id == id)
    switch (procurarCarro.length) {
        case 0:
            console.log("-----------------------------------------------")
            return "Não há um Carro com este nome!"
            console.log("-----------------------------------------------")
            break;
        default:
            listaCarros.splice(id - 1, 1)
            console.table(carros)
            break;
    }
}

let nomeCarroDeletar = "Tiguan";
let idCarro = carros.filter(idCarro => idCarro.modelo == nomeCarroDeletar)
let idDeletado = idCarro[0].id
deletarCarroPorNome(idDeletado, carros)
console.log("----------------------------------------------------------------")
console.log("O carro excluido foi: ")
console.log("----------------------------------------------------------------")
console.table(idCarro)
console.log("----------------------------------------------------------------")
console.log("Lista de carros atualizada após exclusão")
console.log("----------------------------------------------------------------")
console.table(carros)