// Coloque os três argumentos de tipo na função e use-os para tipar cada um dos argumentos. 
// O primeiro tipo deve ser o tipo do objeto a ser editado
// o segundo tipo deve ser uma das propriedades do tipo do objeto
// o terceiro tipo deve ser o tipo de valor que essa propriedade do objeto aceita
export function editProperty<O, P extends keyof O, V extends O[P]>(obj: O, property: P, value: V): void {
    obj[property] = value
}

editProperty({ nome: "alan" }, "nome", "a")

editProperty({ nome: "milleny", age: 20 }, "age", 1)

