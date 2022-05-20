<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const navigationObj = [
    {
        name: 'Kołdry i Poduszki',
        subMenu: [
            {
                name: 'Kołdry puchowe',
                img: 'Biala_Koldra_Puchowa_PIOREX_Zimowa_Linia_Ekskluzywna.jpg.webp'
            },
            {
                name: 'Poduszki puchowe',
                img: 'Yessen-poduszka.jpg.webp'
            },
            {
                name: 'Kołdry antyalergiczne',
                img: 'Koldra_Antyalergiczna_BODY_NICE-TROPIC_Letnia.jpg.webp'
            },
            {
                name: 'Poduszki antyalergiczne',
                img: 'Poduszka_antyalergiczna_New_Lawender3.jpg.webp'
            },
            {
                name: 'Kołdry Naturalne',
                img: 'InterWidex-Senna-Home-Koldra-BOTANICA-kostka2.jpg'
            }
        ],
    },
    {
        name: 'Pościel'
    },
    {
        name: 'Koce i Pledy'
    },
    {
        name: 'Prześcieradła'
    },
    {
        name: 'Łazienka'
    },
    {
        name: 'Nowości'
    },
    {
        name: 'Promocje'
    },
    {
        name: 'Marki'
    },
    {
        name: 'Blog'
    }
]

</script>
<template>

    <div class="grid grid-cols-12 container py-7 gap-4">
        <div class=" col-span-6">
            <nuxt-link to="/"><img src="@/assets/images/logo.svg" alt="Cotti" width="143" /></nuxt-link>
        </div>
        <div class=" col-span-4 relative">
            <img class=" absolute top-4 left-2 opacity-50" src="@/assets/images/search.svg" alt="Szukaj" width="20" />
            <form>
                <input class=" h-12 border-b border-black w-full pl-10" type="text" placeholder="Szukaj produktów" />
            </form>
        </div>
        <div class=" col-span-2 uppercase grid grid-cols-12 gap-4 items-center">
            <div class="relative col-span-3">
                <nuxt-link to="#">
                    <img src="@/assets/images/heart.svg" alt="Ulubione" width="27" />
                    <span class="absolute right-0 w-5 h-5 top-3/4">0</span>
                </nuxt-link>
            </div>
            <div class="relative col-span-3">
                <nuxt-link to="#">
                    <img src="@/assets/images/bag.svg" alt="Koszyk" width="27" />
                    <span
                        class=" bg-amber-500 absolute top-3/4 text-xs font-bold right-0 w-5 h-5 flex justify-center items-center rounded-full">0</span>
                </nuxt-link>
            </div>
            <nuxt-link to="#" class=" col-span-6 text-right">Moje konto</nuxt-link>
        </div>
    </div>

    <div class=" border-t border-stone-100 relative z-20">

        <nav class="container pt-3 pb-4">

            <ul>
                <Menu as="li" class=" uppercase inline-block relative" v-for="nav in navigationObj" :key="nav">
                    <MenuButton v-if="nav.subMenu" class="px-6 first:pl-0 hover:underline flex items-center uppercase">
                        {{ nav.name }} <img src="@/assets/images/arrow.svg" width="18" />
                    </MenuButton>
                    <nuxt-link v-else to="#" class="px-6 hover:underline flex items-center gap-2">
                        {{ nav.name }}
                    </nuxt-link>
                    <Transition>
                        <MenuItems ad="div" class=" absolute top-full pt-6 w-[1250px] bg-white">
                            <MenuItem>
                            <ul class="grid grid-cols-10 gap-4 shadow-2xl pb-6">
                                <li class=" uppercase col-span-2" v-for="subNav in nav.subMenu" :key="subNav">
                                    <nuxt-link to="#" class=" hover:underline">
                                        <img
                                            :src="`assets/images/${subNav.img}`" />
                                        <span class="inline-block pl-4">{{ subNav.name }}</span>
                                    </nuxt-link>
                                </li>
                            </ul>
                            </MenuItem>
                        </MenuItems>
                    </Transition>
                </Menu>
            </ul>

        </nav>
    </div>
</template>
<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>