<script>
	import { onMount } from 'svelte';
	import { months } from './cal.js';
		import { 
			
			getYear, 
			setYear, 
  	  addYears,
			subYears,
			format,
			max,
			min,
			differenceInYears,
	} from 'date-fns';
	export let date = new Date();
  import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	const end = max([date, new Date()]);
	const start = min([date, subYears(new Date(), 10)]);
	const diff = Math.abs(differenceInYears(start, end)) + 1;
				
	let years = Array.from({length: diff}, (a, index) => addYears(start, index));
	let top = null;
	
	onMount(() => {
		top.scrollTop = 15;
	})

	let onScroll = (e) => {
		console.log("Scroll", e.target.scrollTop)
		if (e.target.scrollTop < 5) {
			years = [new Date(subYears(years[0], 1)) ,...years]
			e.target.scrollTop = 5;
		}
	}
</script>

<div class="years" bind:this={top} on:scroll={onScroll}>	
	{#each years as year}
   <div
			class="year"
			class:active={ getYear(date) === getYear(year) }
      on:click={() => dispatch("change", setYear(date, getYear(year))) }>
		 {format(year, 'yyyy')}
	</div>
	{/each}
</div>

<style>
	.years {
		height: 12rem;
		overflow: scroll;
	}
	.active {
		background: #adaada;
	}
	.year {
		padding: 2px 5px;
	}
	.year:hover {
		background: gray;
	}
</style>
