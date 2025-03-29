export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-black">About Pokémon Explorer</h1>
      <p className="text-black mt-4 text-400">
        This website allows you to browse and learn about different Pokémon.
        Data is sourced from the <a href="https://pokeapi.co/" className="text-blue-400 hover:underline">PokéAPI</a>.
      </p>
    </div>
  );
}
