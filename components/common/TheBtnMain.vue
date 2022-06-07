<script setup>
    const props = defineProps({
        msg: {
            default: "Zobacz więcej",
            String: true
        }
    })
</script>
<template>
    <span class="text-white border border-amber-500 pt-2 pb-3 inline-block mt-4 cursor-pointer w-48 text-center group-hover:bg-amber-500 transition-all">{{ props.msg }}</span>
</template>