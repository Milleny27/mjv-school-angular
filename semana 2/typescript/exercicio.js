"use strict";
const milleny = {
    nome: 'Milleny',
    idade: 19,
    profissao: 'Desenvolvedora Full Stack',
    assuntosDeInteresse: ['HTML', 'CSS', 'JavaScript', 'Angular', 'TypeScript', 'Java', 'SpringBoot', 'C#', 'Python']
}; // 2
function retornaListaDeAssuntos(pessoa) {
    return `Assuntos de Interesse de ${pessoa.nome}: ${pessoa.assuntosDeInteresse}`;
} // 3 e 4
var MateriasDoCurso;
(function (MateriasDoCurso) {
    MateriasDoCurso["Angular"] = "Angular";
    MateriasDoCurso["Typescript"] = "Typescript";
    MateriasDoCurso["Git"] = "Git";
})(MateriasDoCurso || (MateriasDoCurso = {})); // 5
const alan = {
    nome: 'Alan',
    materiasMinistradas: [MateriasDoCurso.Angular, MateriasDoCurso.Typescript, MateriasDoCurso.Git]
}; // 7
const nathan = {
    nome: 'Nathan',
    materiasMinistradas: [MateriasDoCurso.Angular, MateriasDoCurso.Git]
}; // 7
const professores = [alan, nathan]; // 8
function nomesProfessores(professores) {
    return professores.map((professor) => professor.nome);
} // 9
console.log("Nomes dos professores: " + nomesProfessores(professores) + "\n");
function Materias(professores) {
    const materiasMinistradas = professores.map(p => p.materiasMinistradas)
        .reduce((accumulador, materiasMinistradas) => {
        return accumulador.concat(materiasMinistradas);
    }, []);
    const materiasSemDuplicacaoSet = new Set(materiasMinistradas);
    return Array.from(materiasSemDuplicacaoSet);
} // 10
console.log("Lista de materias: " + Materias(professores) + "\n");
function professorQueMinistraTS(professores) {
    return professores.find(professor => professor.materiasMinistradas.includes(MateriasDoCurso.Typescript));
} // 11
console.log("Professor ministra TS: " + professorQueMinistraTS(professores));
