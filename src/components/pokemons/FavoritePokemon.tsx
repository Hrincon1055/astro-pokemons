import type { IFavoritePokemon } from '@interfaces/favoritePokemon';
import { createSignal, Show, type Component } from 'solid-js';
interface Props {
  pokemon: IFavoritePokemon;
}
export const FavoritePokemon: Component<Props> = ({ pokemon }) => {
  const [isVisible, setIsVisible] = createSignal(true);
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const deleteFavorite = () => {
    const favorites = JSON.parse(
      localStorage.getItem('favorites') ?? '[]'
    ) as IFavoritePokemon[];

    const newFavorites = favorites.filter(
      (fav: IFavoritePokemon) => fav.id !== pokemon.id
    );
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsVisible(false);
  };
  return (
    <Show when={isVisible()}>
      <div class='flex flex-col justify-center items-center'>
        <a class='cursor-pointer' href={`/pokemons/${pokemon.name}`}>
          <p class='capitalize'>
            <img
              src={imageSrc}
              alt={pokemon.name}
              width='96'
              height='96'
              style={`view-transition-name: ${pokemon.name}-image`}
            />
            #{pokemon.id} {pokemon.name}
          </p>
        </a>
        <button
          onClick={deleteFavorite}
          class='text-red-800 cursor-pointer'>
          Borrar
        </button>
      </div>
    </Show>
  );
};
