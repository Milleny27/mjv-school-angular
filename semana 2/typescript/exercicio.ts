interface Pessoa {
    nome: string;
    idade: number;
    profissao: string;
    assuntosDeInteresse: string[]
} // 1

const milleny: Pessoa = {
	nome: 'Milleny',
    idade: 19,
    profissao: 'Desenvolvedora Full Stack',
    assuntosDeInteresse: ['HTML', 'CSS', 'JavaScript', 'Angular', 'TypeScript', 'Java', 'SpringBoot', 'C#', 'Python']
} // 2

function retornaListaDeAssuntos(pessoa: Pessoa): string {
    return `Assuntos de Interesse de ${pessoa.nome}: ${pessoa.assuntosDeInteresse}`;
} // 3 e 4

enum MateriasDoCurso {
    Angular = "Angular",
    Typescript = "Typescript",
    Git = "Git",
} // 5

interface Professor {
    nome: string;
    materiasMinistradas: string[]
} // 6

const alan: Professor = {
    nome: 'Alan', 
    materiasMinistradas: [MateriasDoCurso.Angular, MateriasDoCurso.Typescript, MateriasDoCurso.Git]
}; // 7

const nathan: Professor = {
    nome: 'Nathan', 
    materiasMinistradas: [ MateriasDoCurso.Angular, MateriasDoCurso.Git]
}; // 7

const professores: Professor[] = [alan, nathan]; // 8

function nomesProfessores(professores: Professor[]): string[] {
    return professores.map((professor) => professor.nome);
} // 9

console.log("Nomes dos professores: " + nomesProfessores(professores) + "\n")

function Materias(professores: Professor[]): MateriasDoCurso[] {
    const materiasMinistradas = professores.map(p => p.materiasMinistradas)
    .reduce<MateriasDoCurso[]>((accumulador: any, materiasMinistradas) => {
        return accumulador.concat(materiasMinistradas)
    }, [])

    const materiasSemDuplicacaoSet = new Set(materiasMinistradas);
    return Array.from(materiasSemDuplicacaoSet);

} // 10

console.log("Lista de materias: " + Materias(professores) + "\n");

function professorQueMinistraTS(professores: Professor[]): Professor | undefined {
    return professores.find(professor => professor.materiasMinistradas.includes(MateriasDoCurso.Typescript));
} // 11

console.log("Professor ministra TS: " + professorQueMinistraTS(professores));