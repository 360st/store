<scrit setup></scrit>
<template>
    <div class="text-gray-800 text-[.875rem]">
        <NuxtLayout name="navbar" />
        <div class=" container grid grid-cols-12 gap-12 mt-16 mb-12">
            <div class=" col-span-6">
                <div class=" w-full h-48 bg-stone-100 rounded"></div>
            </div>
            <div class=" col-span-6 flex">
                <p class="bg-stone-100 w-1/3 inline-block h-48 rounded"></p>
                <p class="bg-stone-100 w-1/3 inline-block h-48 mx-2 rounded"></p>
                <p class="bg-stone-100 w-1/3 inline-block h-48 rounded"></p>
            </div>
        </div>
        <NuxtLayout name="footer" />
    </div>
</template>