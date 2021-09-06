<script lang="ts">
    import {user,logout} from '../auth-store'
    import { goto } from '$app/navigation'
    import { onMount } from 'svelte';
    onMount(()=>{
        if(!$user)
            goto("/login")
    })
</script>

<div class="flex flex-col w-screen min-h-screen" >
    <header class="flex justify-end w-full shadow-lg" >
        <div on:click={logout} class="w-10 m-2"> 
            <img class="w-full object-contain" src="https://img.icons8.com/color/50/000000/power-off-button.png" alt="logout" />
        </div>
    </header>
    <slot />
</div>

<style>
    img:hover{
        cursor: pointer;
    }
</style>