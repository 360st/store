<script setup>
import {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]
const selectedPerson = ref(people[0])
</script>
<template>
    <div class="relative z-10 my-10">
        <form>
            <Listbox v-model="selectedPerson">
                <div class="relative mt-1 w-1/4 mr-2 inline-block">
                    <ListboxButton
                        class="relative cursor-default border-b border-gray-300 w-full py-2 pl-3 pr-10 text-left focus:outline-none">
                        <span class="block text-gray-500">{{ selectedPerson.name }}</span>
                        <img class=" absolute right-0 top-[calc(50%_-_3px)] opacity-50" src="@/assets/images/arrow-png.png" />
                    </ListboxButton>

                    <transition>
                        <ListboxOptions
                            class="absolute mt-1 max-h-60  overflow-auto rounded-md w-full bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            <ListboxOption v-slot="{ active, selected }" v-for="person in people" :key="person.name"
                                :value="person" as="template">
                                <li :class="[
                                    active ? 'bg-stone-100' : 'text-gray-800',
                                    'relative cursor-default select-none py-2 px-4',
                                ]">
                                    <span :class="[
                                        selected ? 'font-medium' : 'font-normal',
                                        'block truncate',
                                    ]">{{ person.name }}</span>
                                </li>
                            </ListboxOption>
                        </ListboxOptions>
                    </transition>
                </div>
            </Listbox>

        </form>
    </div>
</template>