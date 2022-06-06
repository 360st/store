<script setup>
import { useMainStore } from '@/store/useMainStore';
import { storeToRefs } from 'pinia';

const { cart, wishlist } = storeToRefs(useMainStore())
const router = useRouter()

onMounted(() => {
    if (localStorage.getItem('cart')) {
        cart.value = JSON.parse(localStorage.getItem('cart'))
    }
    if (localStorage.getItem('wishlist')) {
        wishlist.value = JSON.parse(localStorage.getItem('wishlist'))
    }
})
watch(cart, (val) => {
    localStorage.setItem('cart', JSON.stringify(val))
},
    { deep: true }
)
watch(wishlist, (val) => {
    localStorage.setItem('wishlist', JSON.stringify(val))
},
    { deep: true }
)
router.options.scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition
    } else {
        return { top: 0 }
    }
}

</script>
<template>
    <CommonNavbarTheInformation />
    <CommonNavbarTheNavigation />
</template>