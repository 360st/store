<script setup>

const props = defineProps({
    name: String,
    slug: String,
    attributes: Array,
    image: Array,
    id: Number,
    price: String,
})
const idToString = computed(() => props.id.toString())
const showHideAtributesId = ref(null)

const getProductId = (id) => {
    showHideAtributesId.value = id
}
const resetProductId = () => {
    showHideAtributesId.value = null
}

const img = computed(() => `${props.image[0].src.slice(0, -4)}-294x252.jpg`)
const price = computed(() => `od ${props.price} zł`)
const brand = props.attributes.filter(e => e.name === "Marka").map(o => o.options[0]).join(' ')
const size = props.attributes.filter(s => s.name === "Rozmiar").map(o => o.options).flat()

</script>
<template>
    <li @mouseenter="getProductId(props.id)" @mouseleave="resetProductId">

        <div class="relative">
            <Transition>
                <div v-show="props.id === showHideAtributesId">
                    <ListWishlist :name="props.name" :slug="props.slug" :image="props.image[0].src" :id="props.id"
                        :price="props.price" />
                    <div v-if="props.attributes.length"
                        class=" text-center bg-white p-2 absolute w-11/12 left-[4.5%] bottom-0">
                        <p class="text-xs">Dostępne rozmiary:</p>
                        <ul>
                            <li v-for="atribute in size" :key="atribute" class=" inline-block font-bold px-0.5 text-xs">
                                {{ atribute }}
                            </li>
                        </ul>
                    </div>
                </div>
            </Transition>
            <nuxt-link :to="`/${props.slug}`">
                <img class="mb-2 w-screen" :src="img" :alt="props.name" />
            </nuxt-link>
        </div>
        <nuxt-link :to="`/${props.slug}`">
            <p class=" text-xs text-gray-600 uppercase mb-1" v-html="brand" />
            <h2>{{ props.name }}</h2>
            <p class=" font-bold mt-1">{{ price }}</p>
        </nuxt-link>
    </li>

</template>