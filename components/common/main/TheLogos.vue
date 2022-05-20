<script setup>

const logos = ['Bossanova-SONNO_03.png.webp', 'hefel_logo_p72_0_03.png', 'hop-design-logo.png.webp', 'logo_fleuresse_03.png.webp', 'logo_piorex.png.webp', 'LOGO-BDV.png', 'logo-myalapca-farm-and-craft_03.png', 'logo-vossen_03.png.webp', 'notte-logo.png.webp', 'treegoose-logo_03.png.webp', 'YESSEN-logo.png.webp']
</script>
<template>
    <div class="py-16 container">
        <ul class="flex">
            <li v-for="logo in logos" :key="logo" class=" px-4 flex items-center">
                <nuxt-link to="#"><img :src="`assets/images/logos/${logo}`" class=" max-h-24 grayscale hover:grayscale-0 transition-all"/></nuxt-link> 
            </li>
        </ul>
    </div>
</template>