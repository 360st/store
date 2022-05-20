<script setup>

const props = defineProps({
    images: Object
})

const currentIndex = ref(0)
const open = ref(false)
const swapImage = ( up ) => {
    up === 'up' ? currentIndex.value++ : currentIndex.value--
}

const leftArrow = computed(() => currentIndex.value > 0)
const rightArrow = computed(() => currentIndex.value < props.images.length -1)

</script>
<template>
    <div class="grid grid-cols-12 gap-12">
        <div class=" col-span-3">
            <ul>
                <li v-for="(picture, index) in props.images" :key="picture.id" class=" mb-2 cursor-pointer"
                    @click="currentIndex = index">
                    <img :src="picture.src" :alt="picture.name" />
                </li>
            </ul>
        </div>
        <div class=" col-span-9 h-[35em]">
            <ul>
                <li  v-for="(picture, index) in props.images" :key="picture.id"  :class="[currentIndex !== index && 'hidden']" class=" cursor-pointer">
                    <img class="h-[35em] object-cover" :src="picture.src" :alt="picture.name" @click="open = true" />
                </li>
            </ul>
        </div>
        <Teleport to="body">
            <Transition>
            <div v-if="open" class=" bg-black w-screen h-full fixed top-0 z-50 flex justify-center items-center">
                <p class=" text-black right-2 top-2 cursor-pointer text-xs font-bold fixed bg-amber-500 rounded-full w-7 h-7 flex justify-center items-center" @click="open = false">X</p>
                <span v-if="leftArrow" class=" text-white cursor-pointer absolute left-8" @click="swapImage">left</span>
                <img class=" max-h-screen p-2" :src="props.images[currentIndex].src" alt="" />
                <span v-if="rightArrow" class=" text-white cursor-pointer absolute right-8" @click="swapImage('up')">right</span>
            </div>
            </Transition>
        </Teleport>
    </div>
</template>
