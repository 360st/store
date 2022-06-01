<script setup>
import { useMainStore } from '@/store/useMainStore';
import { storeToRefs } from 'pinia';

const { idPaginationPage, orderby } = storeToRefs(useMainStore())

const props = defineProps({
    productsId: String,
    upSell: Boolean,
    categoryId: Number,
    searchValue: String
})

const { data: list, pending } = props.categoryId ? await useAsyncData('list', () => $fetch(`/api/list/${props.categoryId}?strona=${idPaginationPage.value || 1}&orderby=${orderby.value}`), { initialCache: false, watch: [idPaginationPage, orderby] })
    : props.searchValue ? await useFetch(`/api/search/${props.searchValue}`)
        : await useFetch(`/api/include/${props.productsId}`)

const displayList = computed(() => props.categoryId ? list.value[0].data : list.value)

const emit = defineEmits(['totalPagesInCategory'])
if (props.categoryId) {
    emit('totalPagesInCategory', list.value[1].totalPages)
}

</script>
<template>
    <ListProducts :class="{ 'w-1/4': props.upSell, 'col-span-3': props.categoryId || props.searchValue, ' opacity-50': pending }"
        :upSell="props.upSell" v-for="data in displayList" :key="data.id" :name="data.name" :slug="data.slug"
        :attributes="data.attributes" :price="data.price" :id="data.id" :image="data.images" />
    <li class=" text-3xl my-16 text-center col-span-12" v-if="props.searchValue && !displayList.length">Nic nie
        znaleziono</li>
    <li class=" w-1/4" v-if="props.upSell"><img src="@/assets/images/product/baner-achive-content-rabat.png"
            alt="Rabat" />
    </li>
</template>