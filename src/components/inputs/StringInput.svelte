<script>
  export let value = "";
  export let type = "string";
  export let id = "";
</script>

<input type="string" {id} on:change on:fous on:blur bind:value={value}>
