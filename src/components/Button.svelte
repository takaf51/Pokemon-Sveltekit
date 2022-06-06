<script>
  import { createEventDispatcher } from 'svelte';
  export let isActive = false;
  const dispatch = createEventDispatcher();
  function clickHandler() {
    dispatch('next', { type:'next'});
    dispatch('prev',{type: 'prev'});
  }
  $:style = 'm-1 py-2 px-6 rounded-[0.4rem] flex-[1_1_50%] text-white' + (isActive ? ' bg-rose-600' : ' bg-rose-300');
</script>

<button on:click={clickHandler} class={style}><slot/></button>