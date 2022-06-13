<script setup>
import { useMainStore } from '@/store/useMainStore';
import { storeToRefs } from 'pinia';

const { cart, wishlist, loggedName, tokenStore } = storeToRefs(useMainStore())
const router = useRouter()


onMounted(() => {

    if (document.cookie && !tokenStore.value) {
        tokenStore.value = document.cookie.slice(12)
    }
    if (localStorage.getItem('cart') && !cart.value.length) {
        cart.value = JSON.parse(localStorage.getItem('cart'))
    }
    if (localStorage.getItem('wishlist') && !wishlist.value.length) {
        wishlist.value = JSON.parse(localStorage.getItem('wishlist'))
    }
    if (localStorage.getItem('name') && !loggedName.value) {
        loggedName.value = JSON.parse(localStorage.getItem('name'))
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
    <div class="text-gray-800 text-[.875rem]">
        <CommonNavbarTheInformation />
        <CommonNavbarTheNavigation />
        <slot />
        <CommonFooterTheFooter />
    </div>
</template>