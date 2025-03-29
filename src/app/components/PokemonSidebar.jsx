import Link from "next/link";
import { fetchPokemonList } from "../../lib/pokemonList";

export default async function PokemonSidebar() {
  const pokemonList = await fetchPokemonList();

  return (
    <ul className="pokemon-list">
    {pokemonList.map((pokemon, index) => (
      <li key={pokemon.name} className="pokemon-list__item">
        <Link href={`/pokemon/${index + 1}`}>
          <span className="pokemon-list__link">{pokemon.name}</span>
        </Link>
      </li>
    ))}
  </ul>
  );
}
