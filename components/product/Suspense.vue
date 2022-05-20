<script setup>
 const route = useRoute()
const { data } = await useFetch(`/api/products/${route.params.id}`, { pick: ['images', 'meta_data', 'attributes', 'price', 'stock_status', 'short_description', 'name', 'price_html', 'description', 'upsell_ids'] })
</script>
<template>
    <div class=" container flex gap-10 mt-6">
        <div class=" w-1/2">
            <ProductGallery :images="data.images" />
        </div>
        <div class=" w-1/2">
            <Title :name="data.name" />
            <ProductSummary :price_html="data.price_html" :short_description="data.short_description" :stock_status="data.stock_status" :price="data.price" :attributes="data.attributes" />
        </div>
    </div>
    <ProductDescription :description="data.description" :meta="data.meta_data" :attributes="data.attributes" :images="data.images[0].src" />
    <ProductUpsells :upsell_ids="data.upsell_ids" />
</template>