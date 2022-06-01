<script setup>
import { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption, } from '@headlessui/vue'
import { useMainStore } from '@/store/useMainStore';


const { changeOrder } = useMainStore()

const order = [
    { name: 'Sortuj wg popularności', value: 'popularity' },
    { name: 'Sortuj wg średniej oceny', value: 'rating' },
    { name: 'Sortuj od najnowszych', value: 'date' },
    { name: 'Sortuj po cenie od najwyższej', value: 'price' },
]
const selectedFilter = ref('Sortuj')

watch(() => selectedFilter.value, () => {
    changeOrder(selectedFilter.value)
})

</script>
<template>
    <div id="filters" class="relative ">
        <form>
            <Listbox v-model="selectedFilter">
                <div class="relative mt-1 mr-2 w-full">
                    <ListboxButton
                        class="relative cursor-default border-b border-gray-300 w-full py-2 pl-3 pr-10 text-left focus:outline-none">
                        <span class="block text-gray-500">{{ selectedFilter }}</span>
                        <img class=" absolute right-0 top-[calc(50%_-_3px)] opacity-50"
                            src="@/assets/images/arrow-png.png" />
                    </ListboxButton>

                    <transition>
                        <ListboxOptions
                            class="absolute mt-1 max-h-60  overflow-auto rounded-md w-full bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            <ListboxOption v-slot="{ active, selected }" v-for="filter in order" :key="filter.name"
                                :value="filter.value" as="template">
                                <li :class="[
                                    active ? 'bg-stone-100' : 'text-gray-800',
                                    'relative cursor-default select-none py-2 px-4',
                                ]">
                                    <span :class="[
                                        selected ? 'font-medium' : 'font-normal',
                                        'block truncate',
                                    ]">{{ filter.name }}</span>
                                </li>
                            </ListboxOption>
                        </ListboxOptions>
                    </transition>
                </div>
            </Listbox>

        </form>
    </div>
</template>