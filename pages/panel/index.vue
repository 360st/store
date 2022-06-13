<script setup>
import { useMainStore } from '@/store/useMainStore';
import { storeToRefs } from 'pinia';

const { tokenStore, loggedName } = storeToRefs(useMainStore())


definePageMeta({
    middleware: 'auth'
})

const { data } = await useFetch('/api/post/getAllCategories')
const router = useRouter()
const priceToString = ref('')

const send = ref({
    name: "",
    type: "simple",
    regular_price: " ",
    description: "",
    short_description: "",
    categories: [
        {
            id: ''
        }
    ],
    images: [
        {
            src: 'https://cotti.pl/wp-content/uploads/2021/09/114128_0014.jpg'
        }
    ]
})
const erroMassage = ref(null)
const successMassage = ref(null)

const add = async () => {
    send.value.regular_price = priceToString.value.toString()
    successMassage.value = false

    const { data: validate } = await useFetch('https://cotti.pl/wp-json/jwt-auth/v1/token/validate', { method: 'POST', headers: { 'Authorization': 'Bearer ' + tokenStore.value } })

    if (validate.value.success === true) {
        const { data: success, error } = await useFetch(`/api/post/submit`, { method: 'POST', body: send.value })
        erroMassage.value = error.value
        successMassage.value = success.value

        send.value = {
            name: "",
            type: "simple",
            regular_price: "",
            description: "",
            short_description: "",
            categories: [
                {
                    id: ''
                }
            ],
            images: [
                {
                    src: 'https://cotti.pl/wp-content/uploads/2021/09/114128_0014.jpg'
                }
            ]
        }
        priceToString.value = " "
    }
}

const logOut = () => {
    localStorage.removeItem('name')
    tokenStore.value = null
    router.push('/login?logout=true')
}


</script>
<template>
    <div class="text-gray-800 text-[.875rem]">
        <NuxtLayout name="navbar" />
        <div class=" container">
            <div class=" flex items-center">
                <h1 class=" font-light text-3xl my-4">Witaj: {{ loggedName }}. Dodaj prosty produkt</h1>
                <p @click="logOut" class=" ml-auto p-2 bg-green-500 text-white rounded cursor-pointer">Wyloguj</p>
            </div>

            <form id="form1" @submit.prevent="add" class=" my-8">
                <div class=" flex gap-8 my-8">
                    <input v-model="send.name" type="text" required placeholder="Nazwa produktu"
                        class=" border-b border-stone-200 w-1/2 py-2  focus:outline-none focus:border-sky-500 " />
                    <input v-model="priceToString" type="number" step="any" required placeholder="Cena"
                        class=" border-b border-stone-200 w-1/2 py-2  focus:outline-none focus:border-sky-500 " />
                    <select v-model="send.categories[0].id" name="categories" required
                        class="w-1/2 border border-stone-200 rounded bg-transparent">
                        <option value="" disabled selected>Kategoria</option>
                        <option v-for="category in data" :key="category.id" :value="category.id">{{ category.name }}
                        </option>
                    </select>
                </div>

                <div class=" flex gap-8 my-8">
                    <textarea v-model="send.description" placeholder="Opis" rows="8"
                        class=" border border-stone-200 w-1/2 p-2 focus:outline-none focus:border-sky-500 rounded"></textarea>
                    <textarea v-model="send.short_description" placeholder="Krótki opis" rows="8"
                        class=" border border-stone-200 w-1/2 p-2 focus:outline-none focus:border-sky-500 rounded"></textarea>
                </div>
                <div class=" flex items-center gap-8">
                    <input class=" border border-amber-500 py-3 px-12 cursor-pointer" type="submit" value="Zapisz" />
                    <p v-show="erroMassage" style="color: red">Coś poszło nie tak!</p>
                    <p v-show="successMassage === false">Dodawanie</p>
                    <p v-show="successMassage" style="color: green">Produkt dodano</p>
                </div>
            </form>
        </div>
        <NuxtLayout name="footer" />
    </div>
</template>