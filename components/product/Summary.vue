<script setup>
const props = defineProps({
    price_html: String,
    short_description: String,
    stock_status: String,
    price: String,
    attributes: Object
})

const inputValue = ref(1)
const price = computed(() => Number(props.price))

const variations = props.attributes.filter(s => s.name === "Rozmiar").map(o => o.options).flat()
const checkStock = computed(() => props.stock_status === "instock" ? '<strong>Wysyłka: 1-3 dni roboczych</strong>, produkt dostępny' : 'Produkct niedostępny')
const formatedPrice = computed(() => `${price.value} zł`)
const freeShipping = computed(() => price.value > 300 ? 'wysyłka gratis' : 'wysyłka od 12,99 zł')

</script>
<template>
    <p class="mb-4" v-html="props.price_html" />
    <p v-html="props.short_description" />

    <div class="mt-6 flex gap-4">
        <a class=" underline text-gray-500" href="#info">Więcej informacji o produkcie</a>
        <span class="ml-auto" :class="[freeShipping && ' rounded-full bg-amber-100 px-2 py-0 text-xs']">{{ freeShipping }}</span>
    </div>

    <div class="mt-6 grid grid-cols-12">
        <div class="col-span-3 flex flex-col">
            <p class=" text-xs text-gray-500">ROZMIAR</p>
            <div class=" mt-auto">
                <button @click="inputValue !== 1 && inputValue--" class=" border border-gray-300 w-7 h-14"> - </button>
                <input class=" border-y border-gray-300 w-7 h-14 text-center focus:outline-none appearance-textfield"
                    type="number" min="1" step="1" v-model="inputValue" />
                <button @click="inputValue++" class=" border border-gray-300 w-7 h-14"> + </button>
            </div>
        </div>
        <div class=" col-span-9">
            <ul class="mb-4">
                <li class=" py-1 px-2 mr-2 inline-block border border-gray-300 cursor-pointer mb-2" v-for="variation in variations"
                    :key="variation">
                    {{ variation }}
                </li>
            </ul>
            <p class=" py-4 text-3xl font-light">{{ formatedPrice }}</p>
            <p class=" text-green-500" v-html="checkStock" />
            <button class=" bg-amber-500 mt-6 h-14 w-full uppercase font-semibold">dodaj do koszyka</button>
        </div>
    </div>
</template>
<style scoped>
.appearance-textfield {
    -moz-appearance: textfield;

}
</style>