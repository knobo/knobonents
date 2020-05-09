
<script>
	import { months } from './cal.js';
		import { 
		setMonth, 
		getMonth, 
	} from 'date-fns';
	export let date = new Date();
  import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

</script>

{#each months as month, index}
	<div 
		class:active={ getMonth(date) === index} 
	  class="month"
		on:click={ () => dispatch("change", setMonth(date, index)) }
	>{month}</div>
{/each}


<style>
	div {
    padding: 2px 5px;
		margin: 0 2px;
	}
	.active {
		background: #adaada;
	}
	div:hover {
		background: gray;
	}
</style>