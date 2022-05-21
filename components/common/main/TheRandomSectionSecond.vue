<script setup></script>
<template>
    <div class="py-8 container grid grid-cols-2 gap-8">
        <div class="col-span-1 mt-4">
            <ul class="flex gap-2">
                <Suspense>
                    <ListSuspense productsId=" 1511, 1659, 6695" />
                    <template #fallback>
                        <ListSkeleton />
                    </template>
                </Suspense>
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