import {writable} from 'svelte/store';

const pokemon = writable({});

export const pokemonManager = () => {
  const updatePokemonData = async (pokemonId =1 ) => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`;
    try{
      const res = await fetch(url);
      if(!res.ok) throw new Error(res.status || 'Something wrong while accesssing pokemon data');
      const data = await res.json();
      const description = data.flavor_text_entries.filter(ent => ent.language.name ==='en')[0].flavor_text.replace(/[\n\f]/g, '');
      const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;
      pokemon.set({name: data.name, description, imgURL});
    } catch(err) {
      console.error(err)
    }
  }
  updatePokemonData(1);
  return {pokemon, updatePokemonData}
}