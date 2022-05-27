<script setup>
import { useMainStore } from '@/store/useMainStore';

const { addToCart } = useMainStore()

const props = defineProps({
    price_html: String,
    short_description: String,
    stock_status: String,
    price: String,
    attributes: Object,
    variations: Array,
    id: Number,
    name: String,
    image: String,
})

const modal = ref({})
const quantity = ref(1)
const size = ref(null)
const isOpenModal = ref(false)

const sizes = props.attributes.filter(s => s.name === "Rozmiar").map(o => o.options).flat()
const price = ref(props.price)
const checkStock = computed(() => props.stock_status === "instock" ? '<strong>Wysyłka: 1-3 dni roboczych</strong>, produkt dostępny' : 'Produkct niedostępny')
const formatedPrice = computed(() => `${price.value} zł`)
const freeShipping = computed(() => price.value > 300 ? 'wysyłka gratis' : 'wysyłka od 12,99 zł')

const getPriceFromVariation = (value) => {
    price.value = value
}
const getQuantity = (value) => {
    quantity.value = value
}
const getSize = (value) => {
    size.value = value
}

const add = () => {
    modal.value = {
        name: props.name,
        size: size.value || sizes[0],
        quantity: quantity.value
    }
    isOpenModal.value = true
    addToCart(props.id, props.image, props.name, size.value || sizes[0], Number(price.value), quantity.value)
}

</script>
<template>
    <p class="mb-4" v-html="props.price_html" />
    <p v-html="props.short_description" />

    <div class="mt-6 flex gap-4">
        <a class=" underline text-gray-500" href="#info">Więcej informacji o produkcie</a>
        <span class="ml-auto rounded-full bg-green-500 px-2 py-1 text-xs text-white">{{ freeShipping }}</span>
    </div>

    <div class="mt-6 grid grid-cols-12">
        <div class="col-span-3 flex flex-col">
            <p class=" text-xs text-gray-500">ROZMIAR</p>
            <div class=" mt-auto">
                <ProductQuantity @quantity="getQuantity" />
            </div>
        </div>
        <div class=" col-span-9">
            <ul class="mb-4">
                <ProductVariations :id="props.id" :sizes="sizes" :variations="props.variations" @price="getPriceFromVariation" @size="getSize" />
            </ul>
            <p class=" py-4 text-3xl font-light">{{ formatedPrice }}</p>
            <p class=" text-green-500" v-html="checkStock" />
            <button @click="add" :disabled="props.stock_status !== 'instock'" :class="{'opacity-50': props.stock_status !== 'instock'}" class=" bg-amber-500 mt-6 h-14 w-full uppercase font-semibold">dodaj do koszyka</button>
        </div>
    </div>
    <div>
        <ProductModal @modalClose="isOpenModal = false" :isOpen="isOpenModal" :modalData="modal" />
    </div>
    
</template>
<style>
.appearance-textfield {
    -moz-appearance: textfield;

}
</style>