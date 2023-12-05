<script lang="ts">
  import {readonlyJwt} from '@/auth.ts'
  import { onMount } from 'svelte';
  import EventTodoItem from './EventTodoItem.svelte'
  import { goto } from '$app/navigation';

  let user;
  let username;
  let logged = false
  let events = []

  async function getUserData(){
    try {
        const url = 'http://127.0.0.1:3000/user';
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-jwt-token': $readonlyJwt,
          },
        });
        if (!response.ok) {
             throw new Error('Invalid Token');
         }else{
             user = await response.json()
             username = user.username
         }
    } catch (err) {
      error = err.message;
    }
  }; 
 async function getEvents(){
    try {
        const url = 'http://127.0.0.1:3000/events';
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-jwt-token': $readonlyJwt,
          },
        });
        if (!response.ok) {
             throw new Error('Invalid Token');
         }else{
             let data = await response.json()
             events = data 
             console.log(events)
         }
    } catch (err) {
      error = err.message;
    }
  };

  onMount(async()=>{
    if($readonlyJwt != ''){
        logged = true;
        await getUserData()
        await getEvents()
    }else{
        goto('/auth/login')    
    }
  })

</script>

{#if logged}
    <h1>{username}'s Home</h1>
    {#if events.length > 0}
        {#each events as item (item.id)}
            <EventTodoItem title={item.title} description={item.description}/>
        {/each}
    {:else}
        <p>Nessun dato disponibile. {events.length} </p>
    {/if}
{:else}
    {$readonlyJwt}
    <h1>Loading...</h1>
{/if}
<!--Barra collassabile --> 
<!--1. Event list component--> 
<!--2. Event kanban component--> 
<!--3. Event calendar component--> 
