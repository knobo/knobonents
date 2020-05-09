<script>
  import StringField from '../fields/StringField.svelte';
  import PasswordField from '../fields/PasswordField.svelte';

</script>
<style>
  button {
    width: 100%;
    background: white;
    border: 1px solid black;
    margin-top: 1rem;    
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #333;
  }

  .form {
    width: 400px;
    padding: 2rem;
    border: 1px solid black;
  }
  .form :global(input) {
    width: 100%;
  }
  
</style>
<div class="form">
  <StringField label="Username" />
  <PasswordField label="Password" />
  <div><button>Login</button></div>
  <div><button>Signup</button></div>
</div>
