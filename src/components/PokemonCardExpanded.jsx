const PokemonCardExpanded = ({ image, name, id }) => (
  <div className="bg-white p-0 rounded-md overflow-hidden relative">
    {/* Primera tarjeta con imagen y nombre */}
    <div className="flex items-center">
      <img src={image} alt={name} className="h-52 w-96 object-contain m-4" />
      <div className="mr-20 text-right">
        <p className="font-primary text-3xl text-left">#{id}</p>
        <p className="text-5xl font-semibold font-primary" style={{ textTransform: 'capitalize' }}>{name}</p>
      </div>
    </div>

    {/* Segunda tarjeta con datos del Pokémon */}
    <div className="bg-orange-400 text-white p-4 rounded-md">
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
