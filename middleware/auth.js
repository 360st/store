import { useMainStore } from '@/store/useMainStore';
import { storeToRefs } from 'pinia';

export default defineNuxtRouteMiddleware((to, from) => {
    const { tokenStore } = storeToRefs(useMainStore())
    if (to.name === 'login' && tokenStore.value) {
        return navigateTo('/panel')
    }
    if (to.name === 'panel' && !tokenStore.value) {
        return navigateTo('/')
    }
})
