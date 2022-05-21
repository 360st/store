<script setup>
 const route = useRoute()
const { data } = await useFetch(`/api/products/${route.params.id}`)

</script>
<template>
    <div class=" container flex gap-10 mt-6">
        <div class=" w-1/2">
            <ProductGallery :images="data[0].images" />
        </div>
        <div class=" w-1/2">
            <Title :name="data[0].name" />
            <ProductSummary :variations="data[0].variations" :price_html="data[0].price_html" :short_description="data[0].short_description" :stock_status="data[0].stock_status" :price="data[0].price" :attributes="data[0].attributes" />
        </div>
    </div>
    <ProductDescription :description="data[0].description" :meta="data[0].meta_data" :attributes="data[0].attributes" :images="data[0].images[0].src" />
    <!-- <Suspense>
        <template #default>
            <ListSuspense :upsell_ids="data.upsell_ids" />
        </template>
        <template #fallback>
            Ładowanie
        </template>
    </Suspense> -->
</template>