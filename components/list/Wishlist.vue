<script setup>
import { useMainStore } from '@/store/useMainStore';
import { storeToRefs } from 'pinia';

const { wishlist } = storeToRefs(useMainStore())
const { addToWishlist } = useMainStore()

const props = defineProps({
    name: String,
    slug: String,
    image: String,
    id: Number,
    price: String,
})
const checkIfAdded = ref(null)

watchEffect(() => {
    if (wishlist.value !== 'undefined') {
        checkIfAdded.value = wishlist.value.find(e => e.id === props.id)
    }
})

const add = () => {
    addToWishlist(props.id, props.image, props.name, props.slug, props.price)
}

</script>
<template>
    <div @click="add" :class="{ 'active': checkIfAdded }"
        class=" absolute z-10 bg-white rounded-full p-2.5 right-2 top-2 cursor-pointer">
        <img src="@/assets/images/heart.svg" alt="dodaj do listy życzeń" width="17" />
    </div>
</template>
<style scoped>
.active {
    background: #F59E0B !important;
}
</style>