const PokemonCardExpanded = ({ image, name, id }) => (
  <div className="bg-white p-0 rounded-md overflow-hidden relative">
    {/* Primera tarjeta con imagen y nombre */}
    <div className="flex items-center">
      <img src={image} alt={name} className="h-52 w-96 object-contain" />
      <div className="ml-auto text-right p-6">
        <p className="text-2xl font-semibold">{name}</p>
      </div>
    </div>

    {/* Segunda tarjeta con datos del Pokémon */}
    <div className="bg-blue-500 text-white p-4">
      <p className="text-lg">ID: {id}</p>
      <p className="text-lg">ID: {id}</p>
      <p className="text-lg">ID: {id}</p>
      <p className="text-lg">ID: {id}</p>
      <p className="text-lg">ID: {id}</p>
      {/* Otros datos del Pokémon */}
    </div>
  </div>
);

export default PokemonCardExpanded;
