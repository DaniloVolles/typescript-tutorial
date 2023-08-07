const n: number = 10
const regex: RegExp = /321321321/

const array1: string[] = myName.split(' ')
const array2: number[] = [1, 2, 3]
const array3: Array<boolean> = [true, false, true, false, false, true]

const arrayAny: Array<number | string | boolean> = [1, 'a', 2, 'b', 3, 'c', true, 100, false, 'z']

const object = { // Coloca o mouse em objeto para ver a mágica
    name: 'Dan',
    role: 'Dev',
    age: 26,
    isHappy: true
}

interface Animal{
    name: string,
    specie: string,
    age?: number, // ? = null permitted
    isBird: boolean
}

const animal: Animal = {
    name: 'John',
    specie: 'Human', 
    age: 30,
    isBird: false
}

const ids: Record<number, string> = {
    [10]: 'a',
    [20]: 'b'
}

ids[30] = 'c'

const arrayTeste = [1, 2, 3].forEach((v: number) => v + 1)