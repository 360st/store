<script setup>
import { useMainStore } from '@/store/useMainStore';
import { storeToRefs } from 'pinia';

const { removeFromWishlist } = useMainStore()
const { wishlist } = storeToRefs(useMainStore())

</script>
<template>
    <NuxtLayout name="custom">
        <div class=" container">
            <div v-if="!wishlist.length" class=" text-center my-40 text-2xl">
                Brak produktów
            </div>
            <div v-else>
                <div v-for="(product, index) in wishlist" :key="product.id"
                    class=" grid grid-cols-12 gap-12 my-20 border-y py-4 mt-4 mb-2 border-stone-100 items-center">
                    <div class=" col-span-5 font-bold flex items-center">
                        <img class=" w-10 mr-2 rounded" :src="product.image" :alt="product.name" />
                        <nuxt-link :to="product.slug"> {{
                                product.name
                        }} </nuxt-link>
                    </div>
                    <div class=" col-span-2 font-bold">
                        {{ product.price }} zł
                    </div>
                    <div class=" col-span-1 cursor-pointer" @click="removeFromWishlist(index)">
                        X
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>