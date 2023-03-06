
const { secret, key } = useRuntimeConfig()

export default defineEventHandler( async (event) => {
    const json = await useBody(event)
    return await $fetch(`http://kbspsogfae.cfolks.pl/wp-json/wc/v3/products/?consumer_key=${key}&consumer_secret=${secret}`, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: json }).catch((error) => error.data)

})
