<script setup>
import { useMainStore } from '@/store/useMainStore';
import { storeToRefs } from 'pinia';

const { tokenStore } = storeToRefs(useMainStore())
const router = useRouter()
const route = useRoute()
const login = ref('')
const password = ref('')
const erroMassage = ref(false)
const tokenCookie = useCookie('tokenCookie', { maxAge: 24 * 60 * 60 })

const add = async () => {
    const { data } = await useFetch('https://cotti.pl/wp-json/jwt-auth/v1/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
            username: login.value,
            password: password.value
        }
    })

    if (data.value) {
        tokenCookie.value = data.value.data.token
        tokenStore.value = data.value.data.token
        localStorage.setItem('name', JSON.stringify(data.value.data.displayName))
        router.push('/panel')
    } else {
        erroMassage.value = true
    }

}

if (route.query.logout === "true") {
    tokenCookie.value = null
    tokenStore.value = null
}

definePageMeta({
    middleware: 'auth'
})
</script>
<template>
    <NuxtLayout name="custom">
        <div class=" container ">
            <h1 class=" font-light text-3xl my-4">Logowanie </h1>
            <form @submit.prevent="add" class=" w-1/3 mt-8 mb-24 flex flex-col bg-stone-100 rounded p-8">
                <input v-model="login" class=" mb-4 border-b py-2 focus:outline-none focus:border-sky-500 px-2 rounded"
                    type="text" placeholder="login" required />
                <input v-model="password"
                    class=" mb-4 border-b py-2 focus:outline-none focus:border-sky-500 px-2 rounded" type="password"
                    placeholder="hasło" required />
                <div class=" flex gap-8 items-center">
                    <input class=" border border-amber-500 py-3 px-12 cursor-pointer" type="submit" value="Zaloguj" />
                    <p v-show="erroMassage" style="color: red">Złe hasło lub login</p>
                </div>

            </form>
        </div>
    </NuxtLayout>
</template>