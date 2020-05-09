
<script>
	import { week } from './cal.js';
	import { 
		getDaysInMonth, 
		startOfMonth, 
		getISODay, 
		getDay, 
		getDate, 
		setDate, 
		setMonth, 
		parseISO, 
		isValid 
	} from 'date-fns';

  import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let date = new Date();
	
  let days = [];
	$: days = Array.from({length: getDaysInMonth(date)});
	let start = [];
	$: start = Array.from({length: getISODay(startOfMonth(date))});	
</script>

<div class="month">
	{#each week as day, index}
 	  <div  class="weekday">{day}</div>
	{/each}	
	{#each start as day, index}
		<div></div>
	{/each}
	{#each days as day, index }
		<div class:active={ (index + 1) === getDate(date) }
				 on:mousedown={ () => dispatch("change", setDate(date, index + 1)) } class="day">
					{ index + 1 }
		    </div>
		{/each}
</div>

<style>
	.month {
		width: 215px;
		font-family: 'Work Sans';
		user-select: none;
		padding: 2px;
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-auto-rows: auto auto 1fr;
		column-gap: 2px;
		row-gap: 2px;
	}
		.day {
		background: #adaada;
		border: 1px solid rgba(0,0,0,0.2);
		height: 2rem;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}
		.weekday {
		text-align: center;
		font-size: 12px;
	}
		.day:hover {
		  filter: brightness(85%);
	}
		.active {
		background:	#686683;
		color: white;
	}
</style>