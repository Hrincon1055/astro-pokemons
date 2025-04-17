import type { IFavoritePokemon } from '@interfaces/favoritePokemon';
import { createSignal, For } from 'solid-js';
import { FavoritePokemon } from './FavoritePokemon';

const getLocalStoragePokemons = (): IFavoritePokemon[] => {
  const favoritePokemons = JSON.parse(
    localStorage.getItem('favorites') ?? '[]'
  );
  return favoritePokemons as IFavoritePokemon[];
};

export const FaviritePokemons = () => {
  const [pokemons, setPokemons] = createSignal<IFavoritePokemon[]>(
    getLocalStoragePokemons()
  );
  return (
    <div class='grid grid-cols-2 sm:grid-cols-4'>
      <For each={pokemons()}>
        {(pokemon) => <FavoritePokemon pokemon={pokemon} />}
      </For>
    </div>
  );
};
