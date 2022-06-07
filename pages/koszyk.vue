<script setup>
import { useMainStore } from '@/store/useMainStore';
import { storeToRefs } from 'pinia';

const { changeQuantityProductCart, removeFromCart } = useMainStore()
const { cart, sum } = storeToRefs(useMainStore())
const newQuantity = ref(null)

const getIndex = (index) => {
    changeQuantityProductCart(index, newQuantity.value)
}


</script>
<template>
    <div class="text-gray-800 text-[.875rem]">
        <NuxtLayout name="navbar" />
        <div class=" container">
            <div class=" grid grid-cols-12 gap-12 my-8">
                <div class=" col-span-4 border-b-2 border-green-600">
                    <p class=" text-xs text-green-600 font-semibold">
                        1 Koszyk
                    </p>
                </div>
                <div class=" col-span-4 border-b-2 border-stone-200">
                    <p class="  text-xs text-stone-500 font-semibold">
                        2 Dane adresowe / metoda płatności
                    </p>
                </div>
                <div class=" col-span-4 border-b-2 border-stone-200">
                    <p class=" text-xs text-stone-500 font-semibold">
                        3 Potwierdzenie
                    </p>
                </div>
            </div>
            <div v-if="!cart.length" class=" text-center my-40 text-2xl">
                Koszyk jest pusty
            </div>
            <div v-else class=" grid grid-cols-12 gap-12 my-20">
                <div class=" col-span-8">
                    <div class=" grid grid-cols-12 gap-12">
                        <div class=" col-span-5 text-stone-500 font-semibold uppercase text-xs">
                            Produkt
                        </div>
                        <div class=" col-span-2 text-stone-500 font-semibold uppercase text-xs">Cena</div>
                        <div class=" col-span-2 text-stone-500 font-semibold uppercase text-xs">Ilość</div>
                        <div class=" col-span-2 text-stone-500 font-semibold uppercase text-xs">Suma</div>
                    </div>
                    <div v-for="(product, index) in cart" :key="product.id" class=" grid grid-cols-12 gap-12 border-y py-4 mt-4 mb-2 border-stone-100 items-center">
                        <div class=" col-span-5 font-bold flex">
                            <img class=" w-10 mr-2 rounded" :src="product.image" :alt="product.name" />   {{ product.name }} {{ product.size }}
                        </div>
                        <div class=" col-span-2">
                            
                            {{ product.price }} zł
                        </div>
                        <div class=" col-span-2"><ProductQuantity @quantity="(val) => newQuantity = val"  @index="getIndex" :quantity="product.quantity" :index="index"  /></div>
                        <div class=" col-span-2 font-bold">
                            {{ product.price * product.quantity }} zł
                        </div>
                        <div class=" col-span-1 cursor-pointer" @click="removeFromCart(index)">
                            X
                        </div>
                    </div>                    
                </div>
                <div class=" col-span-4 text-black  text-xs">
                    <p class="font-bold uppercase mb-8">Podsumowanie koszyka</p>
                    <p class=" font-light text-lg bg-stone-100 p-2">Suma do zapłaty: {{ sum }} zł</p>
                </div>
            </div>

        </div>
        <NuxtLayout name="footer" />
    </div>
</template>