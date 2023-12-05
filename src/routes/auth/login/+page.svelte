<script>
  import { goto } from '$app/navigation';
  import {jwt} from '@/auth.ts'

  let error = null;
  let email= '';
  let pwd= '';

  async function login(){
    try {
        let body = {
             email: email,
             pwd: pwd,
        };

        const url = 'http://127.0.0.1:3000/login';
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
             jwt.set(jresponse.token)
             goto("/home")
         }
    } catch (err) {
      error = err.message;
    }
  };

</script>

<div class="login-container">
    <form on:submit|preventDefault={login}>

      <div class="input-container">
        <p class="input-text">email:<p>
        <input class="input" type="text" bind:value={email} />
      </div>
    
      <div class="input-container">
        <p class="input-text">Password:</p>
        <input class="input" type="password" bind:value={pwd} />
      </div>

      <button type="submit">Login</button>
    </form>

    <label> Don’t have an account?
        <a href="/auth/signup">Signup</a>
    </label>
</div>

<style>
    @import "../auth.css";
</style>
