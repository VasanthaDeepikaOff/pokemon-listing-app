export async function fetchPokemonList() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50", {
    next: { revalidate: 3600 },
  });
  const data = await res.json();

  return data.results;
}
