let response = null
const { secret, key } = useRuntimeConfig()

export default defineEventHandler( async (event) => {
    const json = await useBody(event)
    console.log(json)
    return await $fetch(`https://cotti.pl/wp-json/wc/v3/products/?consumer_key=${key}&consumer_secret=${secret}`, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: json }).catch((error) => error.data)

})
