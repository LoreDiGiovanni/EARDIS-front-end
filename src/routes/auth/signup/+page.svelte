<script>
  import { goto } from '$app/navigation';

  let error = null;
  let username = '';
  let email= '';
  let pwd= '';

  async function signup(){
    try {
        let body = {
             username: username,
             email: email,
             pwd: pwd,
        };

        const url = 'http://127.0.0.1:3000/createAccount';
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
             throw new Error('Invalid Input');
         }else{
             const jresponse = await response.json()
             document.cookie = jresponse.cookie
             goto("/home")
         }
    } catch (err) {
      error = err.message;
    }
  };
</script>

<div class="login-display">
    <form on:submit|preventDefault={signup}>
      <label>
        Username:
        <input type="text" bind:value={username} />
      </label>
    
      <label>
        Email:
        <input type="text" bind:value={email} />
      </label>
    
      <label>
        Password:
        <input type="password" bind:value={pwd} />
      </label>
    
      <button type="submit">Signup</button>
    </form>
    <label> Already signed up? 
        <a href="/auth/login">Login</a>
    </label>
</div>

<style>
    @import "../auth.css";
</style>
