<script>
import Tag from './Tag.svelte';
import { newTag } from './tags.js';
	
  export let options = ["Blue", "Red", "Green"].map(newTag);
	let selected = [...options]; 	
	let value = null;

	const select = () => {
		if (value) {
		  selected = [...selected, newTag(value)];
		}
	};
	
	const remove = (index) => {
		selected.splice(index, 1);
		selected = selected;
	}
	const sel = (ev) => {
		console.log();
		selected= [...selected, options[ev.target.selectedIndex]];
	}
	
	const add = (e) =>  {
		if (e.which === 13 && value) {
			selected = [...selected, newTag(value)];
		  value= "";
		}
	} 
</script>

<div class="input-container">
	{#each selected as element, i (element.id) }
	<Tag on:click={()=> remove(i)} {...element}></Tag>
	{/each}
  <input on:keydown={add} bind:value={value} />
</div>

<div>	

	<select name="country" on:input={sel} id="select-color">		
	<optgroup label="colors">
{#each options as option, i (option)}
  <option value="{option}">✓ {option.name}</option>
{/each}
</select>
</div>

<style>
	.input-container {
		border: 1px solid gray;
		margin: 0.2rem 0;
		padding: 0;
		border-radius: 2px;
		outline: 0;
		display: flex;
		line-height: 100%;
		align-items: center;
		padding: 0 0rem;
		flex-wrap: wrap;
	}
	
	input{
		margin: 0;
	  border: 0;
		outline: 0;
		width: 100%;
		display: inline-block;
		width: fit-content;
	}
</style>
