<script setup>
import img1 from '@/assets/images/Biala_Koldra_Puchowa_PIOREX_Zimowa_Linia_Ekskluzywna.jpg.webp'
import img2 from '@/assets/images/Yessen-poduszka.jpg.webp'
import img3 from '@/assets/images/Koldra_Antyalergiczna_BODY_NICE-TROPIC_Letnia.jpg.webp'
import img4 from '@/assets/images/Poduszka_antyalergiczna_New_Lawender3.jpg.webp'
import img5 from '@/assets/images/InterWidex-Senna-Home-Koldra-BOTANICA-kostka2.jpg'
import { useMainStore } from '@/store/useMainStore';
import { storeToRefs } from 'pinia';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import Search from './Search.vue';


const { quantity, wishlist } = storeToRefs(useMainStore())
const navigationObj = [
    {
        name: 'Kołdry i Poduszki',
        subMenu: [
            {
                name: 'Kołdry puchowe',
                link: '/kategoria/koldry-puchowe',
                img: img1,
                slug: 'koldry-puchowe'
            },
            {
                name: 'Poduszki puchowe',
                link: '/kategoria/poduszki-puchowe',
                img: img2,
                slug: 'poduszki-puchowe'
            },
            {
                name: 'Kołdry antyalergiczne',
                link: '/kategoria/koldry-antyalergiczne',
                img: img3,
                slug: 'koldry-antyalergiczne'
            },
            {
                name: 'Poduszki antyalergiczne',
                link: '/kategoria/poduszki-antyalergiczne',
                img: img4,
                slug: 'poduszki-antyalergiczne'
            },
            {
                name: 'Kołdry Naturalne',
                link: '/kategoria/koldry-naturalne',
                img: img5,
                slug: 'koldry-naturalne'
            }
        ],
    },
    {
        name: 'Pościel',
        link: '/kategoria/posciel',
        slug: 'posciel'
    },
    {
        name: 'Koce i Pledy',
        link: '/kategoria/koce-i-pledy',
        slug: 'koce-i-pledy'
    },
    {
        name: 'Prześcieradła',
        link: '/kategoria/przescieradla',
        slug: 'przescieradla'
    },
    {
        name: 'Łazienka',
        link: '/kategoria/lazienka',
        slug: 'lazienka'
    },
    {
        name: 'Nowości',
        link: '#',
    },
    {
        name: 'Promocje',
        link: '#',
    }
]

</script>
<template>

    <div class="grid grid-cols-12 container py-7 gap-4">
        <div class=" col-span-6">
            <nuxt-link to="/"><img src="@/assets/images/logo.svg" alt="Cotti" width="143" /></nuxt-link>
        </div>
        <div class=" col-span-4 relative">
            <Search />
        </div>
        <div class=" col-span-2 uppercase grid grid-cols-12 gap-4 items-center">
            <div class="relative col-span-3">
                <nuxt-link to="/wishlist">
                    <img src="@/assets/images/heart.svg" alt="Ulubione" width="27" />
                    <span class="absolute right-0 w-5 h-5 top-3/4">{{ wishlist.length }}</span>
                </nuxt-link>
            </div>
            <div class="relative col-span-3">
                <nuxt-link to="/koszyk">
                    <img src="@/assets/images/bag.svg" alt="Koszyk" width="27" />
                    <span
                        class=" bg-amber-500 absolute top-3/4 text-xs font-bold right-0 w-5 h-5 flex justify-center items-center rounded-full">{{quantity}}</span>
                </nuxt-link>
            </div>
            <nuxt-link to="/login" class=" col-span-6 text-right">Moje konto</nuxt-link>
        </div>
    </div>

    <div class=" border-t border-stone-100 relative z-20">

        <nav class="container pt-3 pb-4">

            <ul>
                <Menu as="li" class=" uppercase inline-block relative" v-for="nav in navigationObj" :key="nav">
                    <MenuButton v-if="nav.subMenu" class="px-6 first:pl-0 hover:underline flex items-center uppercase">
                        {{ nav.name }} <img src="@/assets/images/arrow.svg" width="18" />
                    </MenuButton>
                    <nuxt-link v-else :to="nav.link" class="px-6 hover:underline flex items-center gap-2">
                        {{ nav.name }}
                    </nuxt-link>
                    <Transition>
                        <MenuItems ad="div" class=" absolute top-full pt-6 w-[1250px] bg-white">
                            <MenuItem>
                            <ul class="grid grid-cols-10 gap-4 shadow-2xl pb-6">
                                <li class=" uppercase col-span-2" v-for="subNav in nav.subMenu" :key="subNav.name">
                                    <nuxt-link :to="subNav.link" class=" hover:underline">
                                        <img
                                            :src="subNav.img" />
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