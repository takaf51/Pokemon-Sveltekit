<script>
  import { createEventDispatcher } from 'svelte';
  export let pokemons;
  const dispatch = createEventDispatcher();
  export let selectedPokemonNum = 1;
</script>

<select bind:value={selectedPokemonNum} class='w-full mb-2 border-1 rounded-md h-[40px] text-[22px]'>
  {#each pokemons as pokemon}
    <option value={pokemon.id}>{pokemon.id}: {pokemon.name}</option>
  {/each}
</select>