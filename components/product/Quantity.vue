<script setup>
const props = defineProps({
    quantity: Number,
    index: Number
})

const emit = defineEmits(['quantity', 'index'])
const inputValue = ref(props.quantity || 1)

watch(() => inputValue.value, () => {
    emit('quantity', inputValue.value)
    emit('index', props.index)
})

</script>
<template>
    <button @click="inputValue !== 1 && inputValue--" class=" border border-gray-300 w-7 h-14"> - </button>
    <input class=" border-y border-gray-300 w-7 h-14 text-center focus:outline-none appearance-textfield" type="number"
        min="1" step="1" v-model="inputValue" />
    <button @click="inputValue++" class=" border border-gray-300 w-7 h-14"> + </button>
</template>