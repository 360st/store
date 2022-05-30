<script setup>
import { useMainStore } from '@/store/useMainStore';
const { search } = useMainStore()

const searchValue = ref('')
const router = useRouter()
const add = () => {
    search(searchValue.value)
    router.push('/search')
}

</script>
<template>

    <img class=" absolute top-4 left-2 opacity-50" src="@/assets/images/search.svg" alt="Szukaj" width="20" />
    <form  @keydown.enter.prevent="add">
        <input v-model="searchValue" class=" h-12 border-b border-black w-full pl-10" type="text"
            placeholder="Szukaj produktów" />
    </form>
</template>