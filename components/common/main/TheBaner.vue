<script setup>
import NewsLetter1 from "../../NewsLetter.vue";
</script>
<template>
    <div class="py-16 container">
        <div class=" grid grid-cols-12 gap-6">
            <nuxt-link class=" col-span-8" to="#">
                <img src="@/assets/images/main/vossen-baner-front-desktop.jpg" alt="Vossen" />
            </nuxt-link>
            <NewsLetter class=" col-span-4" />
        </div>
    </div>
</template>