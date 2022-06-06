<script setup>

</script>
<template>
    <div class="text-gray-800 text-[.875rem]">
        <NuxtLayout name="navbar" />
        <div class=" container ">
           <h1 class=" font-light text-3xl my-4">Logowanie </h1>
            <form class=" w-1/4 mt-8 mb-24 flex flex-col bg-stone-100 rounded p-8">
                <input class=" mb-4 border-b py-2 focus:outline-none focus:border-sky-500 px-2 rounded" type="text" placeholder="login" />
                <input class=" mb-4 border-b py-2 focus:outline-none focus:border-sky-500 px-2 rounded" type="password" placeholder="hasło" />
                <CommonTheBtnMain class=" text-black" msg="Zaloguj" />
            </form>
        </div>
        <NuxtLayout name="footer" />
    </div>
</template>