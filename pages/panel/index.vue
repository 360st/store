<script setup>

const { data } = await useFetch('/api/post/getAllCategories')
const priceToString = ref('')

const send = ref({
    name: "",
    type: "simple",
    regular_price:" ",
    description: "",
    short_description: "",
    categories: [
        {
            id: ''
        }
    ],
    images: [
        {
            src: 'http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg'
        }
    ]
})
const erroMassage = ref(null)
const succesMassage = ref(null)

const add = async () => {
    send.value.regular_price = priceToString.value.toString()
    succesMassage.value = false
    const { data: succes, error } = await useFetch(`/api/post/submit`, { method: 'POST', body: send.value})
    
    erroMassage.value = error.value
    succesMassage.value = succes.value

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
                src: 'http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg'
            }
        ]
    }
    priceToString.value = " "
}

</script>
<template>
    <div class="text-gray-800 text-[.875rem]">
        <NuxtLayout name="navbar" />
        <div class=" container">
            <h1 class=" font-light text-3xl my-4">Dodaj prosty produkt</h1>
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
                    <p v-show="succesMassage === false" >Dodawanie</p>
                    <p v-show="succesMassage" style="color: green">Produkt dodano</p>
                </div>
            </form>
        </div>
        <NuxtLayout name="footer" />
    </div>
</template>