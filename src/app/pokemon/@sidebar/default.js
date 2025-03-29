import PokemonSidebar from "@/app/components/PokemonSidebar";

export default function Default() {
  return (
    <div className="sidebar max-h-dvh overflow-y-scroll bg-cyan-950 p-4">
      <h2 className="text-xl font-bold mb-4 text-pink-600">Pokémon List</h2>
      <PokemonSidebar />
    </div>
  );
}
