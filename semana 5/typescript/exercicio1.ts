// Crie uma função que aceita um argumento e retorna true se o argumento for um array, ou false caso não seja.
// Coloque a tipagem para que o Typescript consiga automaticamente entender esse retorno
// Dica: utilize um parâmetro de tipo para receber o tipo do argumento

function ehArray<T>(arg: T): T extends Array<any> ? true : false {
    return Array.isArray(arg) as any;
}

const arrayVazio = [];
const arrayVazioEhArray = ehArray(arrayVazio);

const arrayComValores = [1, 2, 3];
const arrayComValoresEhArray = ehArray(arrayComValores);

const letra = 'a';
const aEhArray = ehArray(letra);

const numero = 1;
const numeroEhArray = ehArray(numero);