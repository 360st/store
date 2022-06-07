<script setup>

const props = defineProps({
    sizes: Array,
    variations: Array,
    id: Number
})
const emit = defineEmits(['price', 'size'])

const variationId = ref(null)
const attributes = ref(props.sizes[0])
const price = ref(null)
const errorMessage = ref(null)

const getVariationId = async (value, size) => {
    variationId.value = value
    const { data, pending, error } = await useFetch(`/api/variation/${props.id}?param=${variationId.value}`, {pick: ['price', 'attributes']})
    attributes.value = data.value.attributes[0].option
    price.value = data.value.price
    errorMessage.value = error.value
    emit('price', price.value)
    emit('size', size)

}

</script>
<template>
    <li v-if="errorMessage" class="  py-1 px-2 mr-2 inline-block  mb-2">
       Coś poszło nie tak
    </li>
    <li v-else :class="{' border-black': size === attributes}" class="  py-1 px-2 mr-2 inline-block border border-gray-300 cursor-pointer mb-2" v-for="(size, index) in props.sizes"
        :key="size" @click="getVariationId(props.variations[index], size)">
        {{ size }}
    </li>
</template>