<script setup>

const props = defineProps({
    datas: Object
})

</script>
<template>
    <div class="py-8 container grid grid-cols-2 gap-8">
        <div class="col-span-1 mt-4">
            <ul class="flex gap-2">
                <ListProducts v-for="data in props.datas" :key="data.id" :name="data.name" :slug="data.slug" :attributes="data.attributes" :price="data.price"
                    :id="data.id" :image="data.images" />
            </ul>
        </div>
        <div class="col-span-1 relative">
            <img class=" absolute right-0" src="@/assets/images/main/kolekcja-kolder-notte.jpg.webp" />
            <div class=" bg-stone-100 relative z-10 p-10 w-1/2 mt-4">
                <h3 class=" text-2xl font-light mb-2">Perfekcja w każdym detalu</h3>
                <p class=" text-gray-600">Kołdry i poduszki Animex.</p>
                <CommonTheBtnMain class=" text-black" />
            </div>
        </div>
    </div>
</template>