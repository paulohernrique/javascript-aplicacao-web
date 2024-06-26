// funcoes:

// anonima - nao precisa definir nome da funcao - normalmente atribuida a variavel ou passada como parametro em outra funcao
// function(parametros){}

const soma = function(a, b) {
    return a + b;
};

console.log(soma(3, 4))

// funções de setas (arrow functions) - especialmente uteis para funcoes de uma unica linha
// (parametros) => corpo da funcao;

const quadrado = (x) => x * x;
console.log(quadrado(2)) 

// funcoes de ordem superior - admite uma funcao como parametro e/ou retornam uma 

function aplicarOperacao(num, operacao) {
    return operacao(num);
}

function dobro(x) {
    return x * 2;
}

console.log(aplicarOperacao(5, dobro));

// closures - funcao interna que tem acesso as variaveis de uma funcao exterior, mesmo depois que a funcao exterior terminou de ser executada

function contador() {
    let contagem = 0;
    return function() {
        contagem++;
        console.log(contagem);
    };
}

const incrementarContador = contador();
incrementarContador();
incrementarContador();

// objetos

// adicionar propriedade

const objeto = {nome: "Maria"};
objeto.idade = 30;
console.log(objeto);

// acessar valor de propriedades - 2 maneiras

console.log(objeto.nome);
console.log(objeto["idade"]);

// remover propriedade

delete objeto.idade;
console.log(objeto);

// mudar valor de uma propriedade

objeto.nome = "João";
console.log(objeto);

// tornar um objeto imodificavel - caso haja uma tentiva, ocorrera um erro ou a instrucao sera ignorada

Object.freeze(objeto);

// iterar sobre as propriedades de um objeto

for (var propriedade in objeto) {
    console.log(propriedade + ": " + objeto[propriedade]);
}