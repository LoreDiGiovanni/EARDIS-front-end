<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    onMount(async () => {
        let jwt= sessionStorage.getItem("token");
        if (!jwt) {
            goto('/auth/login')
         } else {
            goto("/home")
         }
    });
</script>


<h1>Loading</h1>

