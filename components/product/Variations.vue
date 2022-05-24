<script setup>

const props = defineProps({
    sizes: Array,
    variations: Array,
    id: Number
})
const emit = defineEmits(['price'])
const variationId = ref(null)
const price = ref(null)
const pendingValue = ref(true)
const getVariationId = async (value) => {
    variationId.value = value
    const { data, error, pending } = await useFetch(`/api/variation/${props.id}?param=${variationId.value}`, {pick: ['price']})
    price.value = data.value.price
    emit('price', price.value)
}


</script>
<template>
    <li class=" py-1 px-2 mr-2 inline-block border border-gray-300 cursor-pointer mb-2" v-for="(size, index) in props.sizes"
        :key="size" @click="getVariationId(props.variations[index])">
        {{ size }}
    </li>
</template>