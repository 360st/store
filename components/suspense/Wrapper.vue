<script setup>

const props = defineProps({
    productsId: String
})

const { data: frontPage } = await useFetch(`/api/include/${props.productsId}`)
const data = (name) => {

    const section = frontPage.value.map(e => {
        return {...e, bedding: e.name.includes(name)}
    }).filter(b => b.bedding === true)

    return section
} 

</script>
<template>
    <CommonMainTheRandomSectionFirst :datas="data('Pościel')"/>
    <CommonMainTheRandomSectionSecond :datas="data('Kołdra')" />
</template>