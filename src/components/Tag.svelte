<script>
  import {rgb2hex, invertColor, AdjustLumin, colors} from './colorfunctions.js';
	export let name = "";
  export let color = colors[Math.floor(Math.random() * Math.floor(5))]; 
</script>

<span 
  class="tags" 
  use:AdjustLumin
  style="background-color: {color}"
 >
	<span class="label">{name}</span>
	<button on:click> ✘ </button>
</span> 


<style>

	.label {
		margin-right: .5rem;
	}
	
	.tags button {
		display: inline-block;
		margin: 0;
		padding: 0;
		padding-left: .2rem;
		margin-left: auto;
		background: none;
		border: 0;
		border-left: 1px solid gray;
	  color: inherit;
	}
	
	.tags button:hover {
	  font-weight: bold;
	}
	
	.tags {
	  min-width: 5rem;
		margin: 0.2rem;
		border: 1px solid gray;
		padding: 0.3rem 0.4rem;
		border-radius: 0.2rem;
		display: inline-flex;
		align-items: center;
	}
</style>

