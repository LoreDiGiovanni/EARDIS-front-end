<script>
  import { goto } from '$app/navigation';
  let succes = false;
  let error = null;

  const login= async () => {
    try {
      const url = 'http://127.0.0.1:3000/check';

      const customHeaders = {
        'Content-Type': 'application/json',
      };
      const response = await fetch(url, {
        method: 'GET',
        body: JSON.stringify({ a, b }),
        headers: {
          ...customHeaders,
        },
      });
        if (response.ok) {
            succes= true 
        } 
    } catch (err) {
      error = err.message;
    }
  };
</script>


<h1>Login</h1>
{#if succes}
  <p> YaY</p>
{/if}

{#if error}
  <p style="color: red;">Errore: {error}</p>
{/if}

<button on:click={login}>Login</button>

