export type Person = {
    name: string,
    age: number,
    address?: string,
}

export interface AnimalInterface {
    type: string
    eat: () => void
}