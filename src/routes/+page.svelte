<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    onMount(async () => {
        let jar = null;
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
          const [name, value] = cookie.split('=');
          if (name.trim() === 'eardis') {
            jar = value;
          }
        }
        if (jar!= null) {
            goto('/auth/login')
         } else {
            goto("/home")
         }
    });
</script>


<h1>Loading</h1>

