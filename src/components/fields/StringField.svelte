<script>
  import StringInput from '../inputs/StringInput.svelte';

  export let label = "Input";

  function guidGenerator() {
    var S4 = function() {
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  }

  const id = guidGenerator();
  
</script>
<div>
  <div><label for="{id}">{ label }:</label></div>
  <StringInput {id} />
</div>
