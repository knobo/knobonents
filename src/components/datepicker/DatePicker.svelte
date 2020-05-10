<script>
  import { 
    format,
    getDaysInMonth,
    startOfMonth,
    getISODay,
    getMonth,
    getDay,
    getDate,
    setDate,
    setMonth,
    setYear,
    subMonths,
    addMonths,
    parseISO,
    isValid,
  } from 'date-fns';

  import { fade, fly, slide } from 'svelte/transition';
  import { week, months } from './cal.js';
  
  import MonthGrid from './MonthGrid.svelte';
  import MonthsGrid from './MonthsGrid.svelte';
  import YearList from './YearList.svelte';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  
  export let date = new Date();
  export let show = "day";
  
  export let autoFocus = false;
  let focus = autoFocus;
  
  function onFocus () {
    focus = true;
  }
  function onBlur (event) {
    focus = false;
    date = new Date(event.target.value);
  }
  
  function newDate (nd) {
    date = nd;
    dispatch("change", date);
  }
  
  function onChange (event) {
    const value = event.target.value; 
    if( value.length >= 10 && isValid(parseISO(value)) ){
      date = parseISO(value);
    }
  }
  let input;
</script>

<div class="dateinput">
  <input
    bind:this={ input }
    on:input={ onChange }
    placeholder="YYYY-MM-DD"
    value={ isValid(date) ? format(date, 'yyyy-MM-dd') : '' }
    on:focus={ onFocus } 
    on:blur={ onBlur }
    >
  {#if focus}
    <div on:mousedown|stopPropagation|preventDefault 
	 class="dategrid"
	 transition:slide
	 >
      <div class="buttons">
	<button on:mousedown={ () => show = "day" } >Dag</button>
	<button on:mousedown={ () => show = "month" } >Måned</button>
	<button on:mousedown={ () => show = "year" } >År</button>
	<button class="ok-button" on:mousedown={ () => input.blur() } >Ok</button>
      </div>
      {#if show === "year"}
	<YearList on:change={ (event) => newDate(event.detail) }
          date={ isValid(date) ? date : new Date() } />
      {:else if show === "month"}
	  <MonthsGrid on:change={ (event) => newDate(event.detail) }
            date={ isValid(date) ? date : new Date() } />
	{:else if show === "day"}		
	    <MonthGrid on:change={ (event) => newDate(event.detail) }
              date={ isValid(date) ? date : new Date()  } />
	  {/if}
	</div>
      {/if}
    </div>

<style>
  .dateinput {
    position: relative;
  }
  
  .dategrid {
    background: white;
    width: 215px;
    font-family: 'Roboto';
    user-select: none;
    padding: 2px;
    border: 1px solid black;
    position: absolute;
    display: flex;
    flex-direction: column;
  }
  
  .buttons {
    display: flex;
    justify-content: space-betweent;
  }

  .buttons button {
    flex: 0 1 25%;
  } 
  button:hover {
    background: gray;
  }
  .ok-button {
    flex: 0;
    margin-left: auto;
    backgorund-color: green;
    backgorund: green;
  }
  
</style>
