<script setup>
import { useMainStore } from '@/store/useMainStore';
import { storeToRefs } from 'pinia';

const props = defineProps({
    totalPagesInCategory: String
})
const route = useRoute()
const { idPaginationPage } = storeToRefs(useMainStore())
idPaginationPage.value = route.query.strona


</script>
<template>
    <div class=" flex justify-center mb-12">
        <ul class=" flex gap-1">
            <li v-for="(pag, index) in Number(props.totalPagesInCategory)" :key="pag">
                <nuxt-link class=" bg-stone-100 py-2 px-3 cursor-pointer" :class="{' border border-black': idPaginationPage == (index + 1)}" @click="idPaginationPage = (index + 1).toString()" :to="`?strona=${index + 1}`">{{ index + 1 }}
                </nuxt-link>
            </li>

        </ul>
    </div>
</template>