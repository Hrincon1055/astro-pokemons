export interface IPokemonResponse {
  count: number;
  next: string;
  previous: null;
  results: IResultListPokemons[];
}

export interface IResultListPokemons {
  name: string;
  url: string;
}
