<script context='module'>
  export const load = async({fetch}) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150';
    try{
        const res = await fetch(url);
        if(!res.ok) throw new Error(res.status || "Something wrong while accessing pokemon data");
        const data = await res.json();
        const pokemons = data.results.map(({name}, index) => {
          return {
            id: index + 1,
            name
          }
        });
      return {props:{pokemons}};
    } catch (err) {
      console.error(err);
    }
  }
</script>

<script>
  import {pokemonManager} from '../stores/pokestore.js'
	import Button from '../components/Button.svelte';
  import Select from '../components/Select.svelte';
  import Card from '../components/Card.svelte'
  export let pokemons;
  let selectedPokemonNum;
  let {pokemon, updatePokemonData} = pokemonManager();
  $:{
      updatePokemonData(selectedPokemonNum)
  }
  function buttonHandler(e) {
    if(e.detail.type === 'next' && pokemons.length > selectedPokemonNum)
      selectedPokemonNum ++;
    if(e.detail.type === 'prev' && 1 < selectedPokemonNum)
      selectedPokemonNum --;
  }
</script>

<div class='w-full'>
  <h1 class='text-center my-2 text-lg font-semibold'>Pokedex by Svelte</h1>
  <Select bind:selectedPokemonNum={selectedPokemonNum} pokemons={pokemons} ></Select>
  <Card {...$pokemon}></Card>
</div>
<div class='flex w-full'>
  <Button on:prev={buttonHandler} isActive={1 < selectedPokemonNum}>Prev</Button>
  <Button on:next={buttonHandler} isActive={pokemons.length > selectedPokemonNum}>Next</Button>
</div>


