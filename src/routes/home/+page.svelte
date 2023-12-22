<script >
  import { onMount } from 'svelte';
  import EventTodoItem from './EventTodoItem.svelte'
  import { goto } from '$app/navigation';
  import SideBar from './SideBar.svelte';

  let user;
  let username;
  let events= [];
  let logged= false;
  let isOpen = false;

  function toggleBar(){
    isOpen = !isOpen;
  }

  async function getUserData(){
    try {
        const url = 'http://localhost:3000/user';
        const response = await fetch(url, {
          method: 'GET',
          headers: {'Content-Type': 'application/json',},
          credentials: 'include',
        });
        if (!response.ok) {
             logged = false
             throw new Error('No logged');
         }else{
             user = await response.json()
             username = user.username
             logged = true
         }
    } catch (err) {
      console.log(err.message);
    }
  }; 
 async function getEvents(){
    try {
        const url = 'http://localhost:3000/events';
        const response = await fetch(url, {
          method: 'GET',
          headers: {'Content-Type': 'application/json',},
          credentials: 'include',
        });
        if (!response.ok) {
             throw new Error('Invalid Token');
         }else{
             let data = await response.json()
             events = data 
             console.log(events)
             return true
         }
    } catch (err) {
      console.log(err.message);
    }
  };

  onMount(async ()=>{
    await getUserData()
    if(logged){
        await getEvents()
    }else{
        goto('/auth/login')    
    }
  })

</script>


{#if logged}
    <h1>{username}'s Home</h1>
    <SideBar isOpen={isOpen}/>
    <button on:click={toggleBar}>{isOpen ? 'Chiudi' : 'Apri'}</button>
    {#if events.length > 0}
        <div>
            {#each events as item (item.id)}
                <EventTodoItem title={item.title} description={item.description}/>
            {/each}
        </div>
    {:else}
        <p>Nessun dato disponibile. {events.length} </p>
    {/if}
{:else}
    <h1>Loading...</h1>
{/if}

<!--Barra collassabile --> 
<!--1. Event list component--> 
<!--2. Event kanban component--> 
<!--3. Event calendar component--> 
