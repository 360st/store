<script setup>
import img1 from '@/assets/images/logos/logo_fleuresse_03.png.webp'
import img2 from '@/assets/images/logos/logo_piorex.png.webp'
import img3 from '@/assets/images/logos/hop-design-logo.png.webp'
import img4 from '@/assets/images/logos/treegoose-logo_03.png.webp'
import img5 from '@/assets/images/logos/logo-myalapca-farm-and-craft_03.png'
import img6 from '@/assets/images/logos/LOGO-BDV.png'
import img7 from '@/assets/images/logos/logo-vossen_03.png.webp'
import img8 from '@/assets/images/logos/notte-logo.png.webp'
import img9 from '@/assets/images/logos/YESSEN-logo.png.webp'
import img10 from '@/assets/images/logos/Bossanova-SONNO_03.png.webp'
const props = defineProps({
    description: String,
    meta: Object,
    images: String,
    attributes: Object
})

const fabric = props.meta.filter(s => s.key === "material").map(v => v.value).join(' ')
const fulfillment = props.meta.filter(s => s.key === "wypelnienie").map(v => v.value).join(' ')
const brand = props.attributes.filter(b => b.name === "Marka").map(o => o.options).join(' ')

const logo = computed(() => {
    switch (brand) {
        case "Fleuresse":
            return img1
        case "PIÓREX":
            return img2
        case "HOP Design":
            return img3
        case "Tree&amp;Goose":
            return img4
        case "Hefel":
            return img5
        case "My Alpaca":
            return img5
        case "Blanc des Vosges":
            return img6
        case "Vossen":
            return img7
        case "Notte":
            return img8
        case "Yessen":
            return img9
        case "Bossanova":
            return img10
    }
})
// const material = (name) => {
//     props.attributes.filter(s => s.name === name).map(o => o.options).join(' ')
// }

</script>
<template>
    <div class=" container bg-stone-100 my-8 grid grid-cols-12 gap-8 pt-8 pb-16 px-8 ">
        <div class="flex col-start-7 col-span-6 mb-8">
            <div v-show="fulfillment.length !== 0" class=" w-1/2 flex items-start">
                <img class=" w-8 mr-2" src="@/assets/images/product/wypelnienie.svg" alt="" />
                <div class="mr-8">
                    <p class=" text-gray-500 uppercase text-xs">Wypełnienie</p>
                    <p>{{ fulfillment }}</p>
                </div>
            </div>
            <div class=" flex items-start w-1/2">
                <img class=" w-8 mr-2" src="@/assets/images/product/material.svg" alt="" />
                <div class="">
                    <p class=" text-gray-500 uppercase text-xs">Tkanina</p>
                    <p>{{ fabric }} </p>
                </div>
            </div>

        </div>
        <div class=" col-span-12 flex justify-center mb-8">
            <nuxt-link to="#"><img class=" grayscale " :src="logo" :alt="brand" />
            </nuxt-link>
        </div>
        <div id="info" class=" grid col-span-7 text-base" v-html="props.description" />

        <div class=" col-span-5">
            <img class=" shadow-2xl rounded-xl" :src="props.images" :alt="brand" />
        </div>
    </div>
</template>