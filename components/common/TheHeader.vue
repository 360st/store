<script setup>
</script>
<template>
    <div>
        <div class=" container m-auto grid grid-cols-2 gap-8">
            <div class=" span-col-1 grid grid-cols-2 gap-8 relative z-10 mt-8">
                <div class=" col-span-1">
                    <figure class="relative">
                        <nuxt-link to="/koldry-i-poduszki/koldry-puchowe/">
                            <div
                                class="before:opacity-50 before:absolute before:content-[''] before:bg-gradient-to-t before:from-black before:to-transparent before:w-full before:h-full before:bottom-0">
                                <img src="@/assets/images/koldry.jpg.webp" alt="kołdry puchowe" />
                            </div>
                            <figcaption class=" absolute bottom-4 left-4">
                                <header class="text-white">

                                    <h3 class=" text-2xl font-light mb-2">Kołdry puchowe</h3>
                                    <h4>Poczuj, jak przyjemny i wygodny może być sen.</h4>

                                </header>
                                <CommonTheBtnMain />
                            </figcaption>
                        </nuxt-link>
                    </figure>
                </div>
                <div class=" col-span-1">
                    <figure class="relative">
                        <nuxt-link to="/kategoria/products/">
                            <div
                                class="before:opacity-50 before:absolute before:content-[''] before:bg-gradient-to-t before:from-black before:to-transparent before:w-full before:h-full before:bottom-0">
                                <img src="@/assets/images/koldra-antyalergiczna-1.jpg.webp"
                                    alt="kołdry antyalergiczne" />
                            </div>
                            <figcaption class=" absolute bottom-4 left-4">
                                <header class="text-white">

                                    <h3 class=" text-2xl font-light mb-2">Kołdry antyalergiczne</h3>
                                    <h4>Antyroztoczowe - syntetyczne i naturalne.</h4>

                                </header>
                                <CommonTheBtnMain />
                            </figcaption>
                        </nuxt-link>
                    </figure>
                </div>
                <div class=" col-span-2">
                    <figure class="relative">
                        <nuxt-link to="#">
                            <div
                                class="before:opacity-50 before:absolute before:content-[''] before:bg-gradient-to-t before:from-black before:to-transparent before:w-full before:h-full before:bottom-0">
                                <img src="@/assets/images/poduszki2.jpg.webp" alt="Poszewki na poduszki" />
                            </div>
                            <figcaption class=" absolute bottom-4 left-4">
                                <header class="text-white">

                                    <h3 class=" text-2xl font-light mb-2">Poszewki na poduszki</h3>

                                </header>
                                <CommonTheBtnMain />
                            </figcaption>
                        </nuxt-link>
                    </figure>
                </div>
            </div>
            <div
                class=" col-span-1 before:absolute before:content-[''] before:w-full before:h-40 before:left-0 before:bg-stone-100">
                <header class="mt-6 mb-2 z-10 relative">

                    <h4 class=" font-light text-3xl mb-1">
                        Lepszy sen, lepszy dzień
                    </h4>
                    <h5 class=" text-base">
                        Wysoki standard, szeroka oferta, unikalne wzornictwo - wszystko to w Cotti.pl
                    </h5>

                </header>
                <figure class="relative">
                    <nuxt-link to="#">
                        <div
                            class="before:opacity-50 before:absolute before:content-[''] before:bg-gradient-to-t before:from-black before:to-transparent before:w-full before:h-full before:bottom-0">
                            <img src="@/assets/images/posciel.jpg.webp" alt="pościel" />
                        </div>
                        <figcaption class=" absolute bottom-4 left-4">
                            <header class="text-white">

                                <h3 class=" text-2xl font-light mb-2">Pościel</h3>
                                <h4>Znajdź wzory, które oddadzą Twój styl.</h4>

                            </header>
                            <CommonTheBtnMain />
                        </figcaption>
                    </nuxt-link>
                </figure>
            </div>
        </div>
    </div>
</template>