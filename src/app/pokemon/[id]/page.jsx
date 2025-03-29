import { getServerSession } from "next-auth";
import { options } from "../../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Image from "next/image";
import { fetchPokemon } from "@/lib/PokemonDetail";

// Dynamic Metadata
export async function generateMetadata({ params }) {
  const pokemon = await fetchPokemon(params.id);
  return {
    title: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
    description: `Details about ${pokemon.name}`,
  };
}

// Pokemon Details Page
export default async function PokemonDetail({ params }) {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin"); // Redirect to login if unauthenticated
  }

  const pokemon = await fetchPokemon(params.id);

  return (
    <div className="pokemon-detail">
    <div className="pokemon-detail__image">
      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={200}
        height={200}
        priority
      />
    </div>
    <h2 className="pokemon-detail__title">ABILITIES</h2>
    <ul className="pokemon-detail__list">
      {pokemon.abilities.map((ability) => (
        <li key={ability.ability.name} className="pokemon-detail__item">
          - {ability.ability.name}
        </li>
      ))}
    </ul>
  </div>
  );
}
