<script setup>
const subcategories = ['Pościel Adamaszkowa', 'Pościel Bawełniana', 'Pościel Flanelowa', 'Pościel Perkalowa', 'Pościel Satyna Bawełniana', 'Pościel Żakardowa']
</script>
<template>
    <nav>
        <ul>
            <li v-for="name in subcategories" :key="name" class=" uppercase border border-gray-300 inline-block mr-2 p-1 px-3">
                <nuxt-link to="#">{{name}}</nuxt-link>
            </li>
        </ul>
    </nav>
</template>