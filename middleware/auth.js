import { useMainStore } from '@/store/useMainStore';
import { storeToRefs } from 'pinia';

const { tokenStore } = storeToRefs(useMainStore())

export default defineNuxtRouteMiddleware((to, from) => {

    if (to.name === 'login' && tokenStore.value) {
        return navigateTo('/panel')
    }
    if (to.name === 'panel' && !tokenStore.value) {
        return navigateTo('/')
    }
})
