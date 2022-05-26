<script setup>
import { useMainStore } from '@/store/useMainStore';
import { storeToRefs } from 'pinia';

const { idPaginationPage } = storeToRefs(useMainStore())

const props = defineProps({
    // datas: Object,
    productsId: String,
    upSell: Boolean,
    listId: String
})
const emit = defineEmits(['totalPagesInCategory'])


const { data: list, refresh }  = props.listId ? await useFetch(`/api/list/${props.listId}?strona=${idPaginationPage.value || 1}`) : await useFetch(`/api/include/${props.productsId}`)

if(props.listId){
    
    const totalPagesInCategory = ref(0)
    totalPagesInCategory.value = parseInt(list.value.slice(-1)[0].totalPages)
    emit('totalPagesInCategory', totalPagesInCategory.value)

    list.value.splice(-1, 1)
}

// watch(() => idPaginationPage.value, (curr, prev) => {
//      console.log(curr, prev)
//      if(curr !== prev){
//          console.log(refresh())
//          refresh()
//      }
    
//  } )

</script>
<template>
    <ListProducts :class="{'w-1/4': upSell, 'col-span-3': listId}" :upSell="upSell" v-for="data in list" :key="data.id" :name="data.name" :slug="data.slug"
        :attributes="data.attributes" :price="data.price" :id="data.id" :image="data.images" />
    <li class=" w-1/4" v-if="upSell"><img src="@/assets/images/product/baner-achive-content-rabat.png" alt="Rabat" /></li> 
</template>