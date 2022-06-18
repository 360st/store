<script setup>
const categoryId = ref(null)
const emit = defineEmits(['categoryId', 'breadcrumbsName', 'breadcrumbsParentName'])
const route = useRoute()
const parent = ref({ name: undefined, slug: undefined })

const { data } = await useFetch(`/api/categories/${route.params.kategoria}`, { pick: ['name', 'id', 'parent'] })
if(data.value.parent !== 0){
    const { data: datas } =  await useFetch(`/api/categories/parent/${data.value.parent}`, { pick: ['name', 'slug'] })
    parent.value = datas.value
}

const { data: subcategories } = await useFetch(`/api/categories/subcategories/${data.value.id}`)

emit('categoryId', data.value.id)
emit('breadcrumbsName', data.value.name)
emit('breadcrumbsParentName', parent.value.name)

useHead({
    title: data.value.name
})

</script>
<template>
    <Title :name="data.name" />
    <CategoriesTopBaner />
    <div class=" grid grid-cols-12 items-center py-4">
        <CategoriesSubcategories :parent="parent" :subcategories="subcategories" class=" col-span-10" />
        <CategoriesFilters class=" col-span-2 z-50" />
    </div>
</template>