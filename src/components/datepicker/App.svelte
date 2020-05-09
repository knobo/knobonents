<script>
	import DatePicker from './DatePicker.svelte';
	let date = new Date("2021-12-12");
</script>
<h1>
{date.toDateString()}	
</h1>

<DatePicker 
	{date} 
	autoFocus={false} 
	on:change={ ({detail}) => date = detail } />
	
	<style>
   	@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');
	</style>