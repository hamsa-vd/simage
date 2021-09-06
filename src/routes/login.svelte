<script lang="ts">
    import { login } from '../auth-store'
</script>


<div class="w-screen min-h-screen flex login-wrapper">
    <div class="flex-1 h-screen" ></div>
    <div class="flex items-center justify-center flex-col space-y-24" >
        <h1 class="text-5xl font-extrabold text-center" > Welcome to <br /> Image Gallery </h1>
        <button on:click={login} class="flex rounded" > <span class="grid p-2 place-items-center rounded-l
            "> <img src="https://img.icons8.com/color/50/000000/google-logo.png" alt="google-icon" /> </span> <p class="px-10 py-4 text-xl font-bold " > Sign In with Google </p> </button>
    </div>
</div>


<style>
    div.login-wrapper > div:first-child{
        background-image: url("../static/gallery.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }

    div.login-wrapper > div:last-child{
        min-width: 30vw;
        background-image: url("../static/login-bg.webp");
        background-repeat: no-repeat;
        background-size: 400%;
    }

    h1{
        color: #35363a;
        letter-spacing: 1px;
    }


    span{
        height: 100%;
        aspect-ratio : 1/1;
        background-color: rgb(236, 238, 246);
    }

    button{
        letter-spacing: 1px;
        background-color: #35363a;
        color: white;
    }
    button:hover{
        color: #35363a;
        background-color: white;
        border: 1px solid #35363a ;
    }

</style>
