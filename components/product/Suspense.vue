<script setup>
const props = defineProps({
    display:Number
})
const route = useRoute()

const { data } = await useFetch(`/api/products/${route.params.id}`, {pick: ['images', 'name', 'variations', 'price_html', 'short_description', 'stock_status', 'attributes', 'images', 'attributes', 'meta_data', 'price' ,'description', 'upsell_ids', 'id']})

</script>
<template>  
    <div class=" container flex gap-10 mt-6">
        <div class=" w-1/2">
            <ProductGallery :images="data.images" />
        </div>
        <div class=" w-1/2">
            <Title :name="data.name" />
            <ProductSummary :image="data.images[0].src" :name="data.name" :id="data.id" :variations="data.variations" :price_html="data.price_html" :short_description="data.short_description" :stock_status="data.stock_status" :price="data.price" :attributes="data.attributes" />
        </div>
    </div>
    <ProductDescription :description="data.description" :meta="data.meta_data" :attributes="data.attributes" :images="data.images[0].src" />
    <ProductUpsells :upsell_ids="data.upsell_ids" />

</template>