<script setup></script>
<template>
    <div class="py-16 container grid grid-cols-2 gap-8">
        <div class="col-span-1">
            <img class=" absolute" src="@/assets/images/main/fleuresse-front-new-winter.jpg" />
            <div class=" bg-stone-100 relative z-10 p-10 w-1/2 ml-auto mt-4">
                <h3 class=" text-2xl font-light mb-2">Pościel idealna</h3>
                <p class=" text-gray-600">Znajdziesz ją właśnie u nas. Poznaj kolekcje Fleuresse Art Jesień/Zima
                    2021/22.</p>
                <CommonTheBtnMain class=" text-black" />
            </div>
        </div>
        <div class="col-span-1 mt-4">
            <ul class="flex gap-2">
                <Suspense>
                    <ListSuspense productsId=" 9028, 6573, 753" />
                    <template #fallback>
                        <ListSkeleton />
                    </template>
                </Suspense>
            </ul>
        </div>
    </div>
</template>