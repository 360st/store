let response = null
const { secret, key } = useRuntimeConfig()

export default defineEventHandler( async (event) => {
    response = await $fetch(`https://cotti.pl/wp-json/wc/v3/products/?consumer_key=${key}&consumer_secret=${secret}&category=${event.context.params.list}&per_page=12`).catch((error) => error.data)
    return response
})
