<script setup>
</script>
<template>
    <div class=" py-8 bg-stone-200">
        <div class=" container flex">
            <div class=" flex-grow grid grid-cols-12">
                <div class="col-span-3 pt-8">
                    <h4 class=" font-light text-xl mb-2">O nas</h4>
                    <ul class=" leading-6">
                        <li>
                            <nuxt-link>
                                Poradnik / Blog
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link>
                                Kontakt
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="col-span-3 pt-8">
                    <h4 class=" font-light text-xl mb-2">Sklep</h4>
                    <ul class=" leading-6">
                        <li>
                            <nuxt-link>
                                Metody wysyłki
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link>
                                Sposoby płatności
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link>
                                Zwroty i reklamacje
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link>
                                Mapa serwisu
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="col-span-3 pt-8">
                    <h4  class=" font-light text-xl mb-2">Na skróty</h4>
                    <ul class=" leading-6">
                        <li>
                            <nuxt-link>
                                Logowanie
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link>
                                Rejestracja
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="col-span-3 pt-8">
                    <h4 class=" font-light text-xl mb-2">Regulaminy</h4>
                    <ul class=" leading-6">
                        <li>
                            <nuxt-link>
                                Regulamin sklepu
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link>
                                Polityka prywatności
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
            <NewsLetter class="border border-black w-4/12" />
        </div>
    </div>
</template>