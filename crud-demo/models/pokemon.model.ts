
export enum TipoPokemon{
    Agua = "Agua",
    Fuego = "Fuego",
    Electrico = "Electrico",
    Dragon = "Dragon",
    Psiquico = "Psiquico",
    Hiedra = "Hiedra"
}

export interface PokemonModel{
    id:number;
    nombre:string;
    tipo: TipoPokemon;
    imagen : string;
    hp : number;
}